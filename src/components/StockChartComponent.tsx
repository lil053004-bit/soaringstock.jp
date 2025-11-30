import { useEffect, useRef } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { StockPrice } from '../types/stock';

interface StockChartComponentProps {
  prices: StockPrice[];
  stockName: string;
}

export default function StockChartComponent({ prices, stockName }: StockChartComponentProps) {
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  const chartData = prices.map((price) => {
    const dateParts = price.date.split('/');
    let year = 2025;
    let month = 0;
    let day = 1;

    if (dateParts.length === 3) {
      year = parseInt(dateParts[0]);
      if (year < 100) {
        year += 2000;
      }
      month = parseInt(dateParts[1]) - 1;
      day = parseInt(dateParts[2]);
    } else if (dateParts.length === 2) {
      month = parseInt(dateParts[0]) - 1;
      day = parseInt(dateParts[1]);
    }

    const timestamp = Date.UTC(year, month, day);

    return {
      x: timestamp,
      open: parseFloat(price.open.replace(/,/g, '')),
      high: parseFloat(price.high.replace(/,/g, '')),
      low: parseFloat(price.low.replace(/,/g, '')),
      close: parseFloat(price.close.replace(/,/g, '')),
      volume: parseInt(price.volume.replace(/,/g, ''))
    };
  }).sort((a, b) => a.x - b.x);

  const ohlcData = chartData.map(d => [d.x, d.open, d.high, d.low, d.close]);
  const volumeData = chartData.map(d => [d.x, d.volume]);

  const options: Highcharts.Options = {
    chart: {
      height: '100%',
      backgroundColor: '#ffffff',
      style: {
        fontFamily: "'M PLUS Rounded 1c', 'Rounded Mplus 1c', 'Hiragino Maru Gothic ProN', sans-serif"
      }
    },
    rangeSelector: {
      selected: 1,
      buttons: [{
        type: 'week',
        count: 1,
        text: '1週'
      }, {
        type: 'month',
        count: 1,
        text: '1ヶ月'
      }, {
        type: 'month',
        count: 3,
        text: '3ヶ月'
      }, {
        type: 'all',
        text: '全期間'
      }],
      buttonTheme: {
        fill: '#fdc27b',
        stroke: '#ad7c48',
        style: {
          color: '#333'
        },
        states: {
          hover: {
            fill: '#f0b86b'
          },
          select: {
            fill: '#ad7c48',
            style: {
              color: 'white'
            }
          }
        }
      }
    },
    title: {
      text: `${stockName} - 株価チャート`,
      style: {
        fontSize: '16px',
        fontWeight: 'bold'
      }
    },
    yAxis: [{
      labels: {
        align: 'right',
        x: -3
      },
      title: {
        text: '株価 (円)'
      },
      height: '60%',
      lineWidth: 2,
      resize: {
        enabled: true
      }
    }, {
      labels: {
        align: 'right',
        x: -3
      },
      title: {
        text: '出来高'
      },
      top: '65%',
      height: '35%',
      offset: 0,
      lineWidth: 2
    }],
    xAxis: {
      type: 'datetime',
      labels: {
        format: '{value:%m/%d}'
      }
    },
    tooltip: {
      split: true,
      shared: true
    },
    series: [{
      type: 'candlestick',
      name: stockName,
      data: ohlcData,
      color: '#ef4444',
      upColor: '#22c55e',
      lineColor: '#ef4444',
      upLineColor: '#22c55e',
      yAxis: 0,
      tooltip: {
        pointFormat: '<span style="color:{point.color}">●</span> <b>{series.name}</b><br/>' +
          '始値: {point.open:.2f}<br/>' +
          '高値: {point.high:.2f}<br/>' +
          '安値: {point.low:.2f}<br/>' +
          '終値: {point.close:.2f}<br/>'
      }
    }, {
      type: 'column',
      name: '出来高',
      data: volumeData,
      yAxis: 1,
      color: '#104d5b',
      tooltip: {
        pointFormat: '<span style="color:{point.color}">●</span> <b>{series.name}</b>: {point.y:,.0f}<br/>'
      }
    }],
    credits: {
      enabled: false
    },
    navigator: {
      enabled: true,
      series: {
        color: '#104d5b'
      }
    },
    scrollbar: {
      enabled: true
    },
    legend: {
      enabled: false
    }
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.chart.reflow();
    }
  }, [prices]);

  if (!prices || prices.length === 0) {
    return (
      <div className="h-full w-full bg-white rounded-3xl p-4 overflow-hidden shadow-xl flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-lg">株式コードを入力してチャートを表示</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-white rounded-3xl p-4 overflow-hidden shadow-xl flex items-center justify-center">
      <div className="w-full h-full">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'stockChart'}
          options={options}
          ref={chartRef}
        />
      </div>
    </div>
  );
}
