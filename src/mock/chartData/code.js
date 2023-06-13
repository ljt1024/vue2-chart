//backgroundColor: "rgba(1,57,134)",
// 配置项对象名称必须是options, 无法使用模板字符串

const codeList = [
    {
        id: 1,
        code: `
const seriesData = [{
    "name": "杭州市",
    "itemStyle": {
        "color": "#32B16C",
        "borderWidth": 1
    },
    "data": [
        [
            "190",
            "3天内",
            "杭州市"
        ],
        [
            "31",
            "5天内",
            "杭州市"
        ],
        [
            "102",
            "10天内",
            "杭州市"
        ],
        [
            "1688",
            "10天以上",
            "杭州市"
        ]
    ],
    "type": "scatter"
},
{
    "name": "宁波市",
    "itemStyle": {
        "color": "#AA89BD",
        "borderWidth": 1
    },
    "data": [
        [
            "42",
            "3天内",
            "宁波市"
        ],
        [
            "8",
            "5天内",
            "宁波市"
        ],
        [
            "116",
            "10天内",
            "宁波市"
        ],
        [
            "482",
            "10天以上",
            "宁波市"
        ]
    ],
    "type": "scatter"
},
{
    "name": "温州市",
    "itemStyle": {
        "color": "#601986",
        "borderWidth": 1
    },
    symbolSize: 25,
    "data": [
        [
            "186",
            "3天内",
            "温州市"
        ],
        [
            "1",
            "5天内",
            "温州市"
        ],
        [
            "9",
            "10天内",
            "温州市"
        ],
        [
            "81",
            "10天以上",
            "温州市"
        ]
    ],
    "type": "scatter"
},
{
    "name": "湖州市",
    "itemStyle": {
        "color": "#FFFC00",
        "borderWidth": 1
    },
    symbolSize: 22,
    "data": [
        [
            "5",
            "3天内",
            "湖州市"
        ],
        [
            "10",
            "5天内",
            "湖州市"
        ],
        [
            "5",
            "10天内",
            "湖州市"
        ],
        [
            "48",
            "10天以上",
            "湖州市"
        ]
    ],
    "type": "scatter"
},
{
    "name": "嘉兴市",
    "itemStyle": {
        "color": "#00FFFF",
        "borderWidth": 1
    },
    symbolSize: 24,
    "data": [
        [
            "0",
            "3天内",
            "嘉兴市"
        ],
        [
            "0",
            "5天内",
            "嘉兴市"
        ],
        [
            "0",
            "10天内",
            "嘉兴市"
        ],
        [
            "0",
            "10天以上",
            "嘉兴市"
        ]
    ],
    "type": "scatter"
},
{
    "name": "绍兴市",
    "itemStyle": {
        "color": "#F39800",
        "borderWidth": 1
    },
    "data": [
        [
            "523",
            "3天内",
            "绍兴市"
        ],
        [
            "73",
            "5天内",
            "绍兴市"
        ],
        [
            "58",
            "10天内",
            "绍兴市"
        ],
        [
            "443",
            "10天以上",
            "绍兴市"
        ]
    ],
    "type": "scatter"
},
{
    "name": "金华市",
    "itemStyle": {
        "color": "#F29B76",
        "borderWidth": 1
    },
    "data": [
        [
            "11",
            "3天内",
            "金华市"
        ],
        [
            "2",
            "5天内",
            "金华市"
        ],
        [
            "141",
            "10天内",
            "金华市"
        ],
        [
            "444",
            "10天以上",
            "金华市"
        ]
    ],
    "type": "scatter"
},
{
    "name": "衢州市",
    "itemStyle": {
        "color": "#F19EC2",
        "borderWidth": 1
    },
    "data": [
        [
            "237",
            "3天内",
            "衢州市"
        ],
        [
            "520",
            "5天内",
            "衢州市"
        ],
        [
            "126",
            "10天内",
            "衢州市"
        ],
        [
            "1169",
            "10天以上",
            "衢州市"
        ]
    ],
    "type": "scatter"
},
{
    "name": "舟山市",
    "itemStyle": {
        "color": "#F19EC2",
        "borderWidth": 1
    },
    "data": [
        [
            "0",
            "3天内",
            "舟山市"
        ],
        [
            "0",
            "5天内",
            "舟山市"
        ],
        [
            "0",
            "10天内",
            "舟山市"
        ],
        [
            "0",
            "10天以上",
            "舟山市"
        ]
    ],
    "type": "scatter"
},
{
    "name": "台州市",
    "itemStyle": {
        "color": "#116B3B",
        "borderWidth": 1
    },
    "data": [
        [
            "128",
            "3天内",
            "台州市"
        ],
        [
            "1",
            "5天内",
            "台州市"
        ],
        [
            "14",
            "10天内",
            "台州市"
        ],
        [
            "544",
            "10天以上",
            "台州市"
        ]
    ],
    "type": "scatter"
},
{
    "name": "丽水市",
    "itemStyle": {
        "borderWidth": 1
    },
    "data": [
        [
            "280",
            "3天内",
            "丽水市"
        ],
        [
            "204",
            "5天内",
            "丽水市"
        ],
        [
            "107",
            "10天内",
            "丽水市"
        ],
        [
            "8076",
            "10天以上",
            "丽水市"
        ]
    ],
    "type": "scatter"
}
];
const options = {
    color: ['rgba(15,179,243,0.3)', 'rgba(23,216,161,0.3)'],
    backgroundColor: "rgba(1,57,134)",
    legend: {
        show: true,
        bottom: 5,
        x: 'center',
        icon: 'circle',
        itemGap: 10,
        itemWidth: 10,
        itemHeight: 10,
        data: ['杭州市', '宁波市', '温州市', '湖州市', '嘉兴市', '绍兴市', '金华市', '衢州市', '舟山市', '台州市', '丽水市'],
        textStyle: {
            color: '#fff',
            fontSize: 12
        }
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            lineStyle: {
                type: 'solid'
            }
        },
        padding: [5, 10],
        backgroundColor: 'rgba(179,206,255,0.8)',
        borderWidth: 0,
        textStyle: {
            color: '#195EDF',
            fontSize: 12
        },
    },
    grid: {
        bottom: '5%',
        top: '5%',
        left: '15%',
        right: '15%',
        height: '60%',
        width: '80%'
    },
    xAxis: {
        axisLine: {
            lineStyle: {
                color: '#5BDBF6'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 12
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#5BDBF6'
            }
        }
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#5BDBF6'
            }
        },
        axisTick: {
            show: false
        },
        data: [
            "3天内",
            "5天内",
            "10天内",
            "10天以上"
        ],
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 12
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#5BDBF6'
            }
        }
    },
    series: seriesData
}`
    },
    {
        id: 2,
        code:`function digitFormat(number) {
  if (isNaN(Number(number))) return 0
  const len = number.toString().length
  if (len <= 4) return number
  if (len > 4 && len < 9) {
    return (number / 10000).toFixed(2) + '万'
  }
  if (len >= 9) {
    return (number / 100000000).toFixed(2) + '亿'
  }
}
const value = ['30519', '27', '0', '3046', '0', '143', '0', '0', '0', '3136', '1570']
const value2 = ['34163', '5381', '278', '724', '0', '4512', '128907', '6684', '0', '987', '71232']
const middleData = ['杭州市', '宁波市', '温州市', '湖州市', '嘉兴市', '绍兴市', '金华市', '衢州市', '舟山市', '台州市', '丽水市']
const options = {
  backgroundColor: "rgba(1,57,134)",
  title: [
    {
      text: '数据状态变更111条',
      textStyle: {
        fontWeight: 'normal',
        color: '#fff',
        fontSize: 12
      },
      top: '0%',
      left: '2%'
    },
    {
      text: '中间库数据删除2222条',
      textStyle: {
        fontWeight: 'normal',
        color: '#fff',
        fontSize: 12
      },
      top: '0%',
      right: '2%'
    }
  ],
  grid: [
    {
      show: false,
      right: '12%',
      top: '10%',
      bottom: '8%',
      containLabel: true,
      width: '33%',
      gridIndex: 0
    },
    {
      show: false,
      left: '12%',
      top: '10%',
      bottom: '8%',
      containLabel: true,
      width: '32%',
      gridIndex: 1
    },
    {
      show: false,
      left: '53%',
      top: '10%',
      bottom: '8%',
      width: '0%',
      gridIndex: 2
    }
  ],
  xAxis: [
    {
      type: 'value',
      gridIndex: 0,
      splitLine: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    {
      type: 'value',
      inverse: true,
      gridIndex: 1,
      splitLine: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    {
      type: 'value',
      gridIndex: 2,
      splitLine: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      type: 'category',
      inverse: true,
      gridIndex: 0,
      data: middleData,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        margin: 10,
        textStyle: {
          color: '#fff',
          fontSize: 12
        }
      }
    },
    {
      type: 'category',
      inverse: true,
      gridIndex: 1,
      data: value2,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        margin: 10,
        textStyle: {
          color: '#00F0FF',
          fontSize: 12
        }
      }
    },
    {
      type: 'category',
      inverse: true,
      gridIndex: 1,
      data: middleData,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        margin: 0,
        textStyle: {
          color: '#fff',
          fontSize: 12
        }
      }
    },
    {
      type: 'category',
      inverse: true,
      gridIndex: 0,
      data: value,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        margin: 0,
        textStyle: {
          color: '#00F0FF',
          fontSize: 12
        }
      }
    },
    {
      type: 'category',
      inverse: true,
      gridIndex: 2,
      data: middleData,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        margin: 0,
        textStyle: {
          color: '#fff',
          fontSize: 12
        }
      }
    }
  ],
  series: [
    {
      type: 'bar',
      barWidth: 9,
      gridIndex: 0,
      legendHoverLink: false,
      z: -100,
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: '#00FDF6'
            },
            {
              offset: 1,
              color: '#00FDF6'
            }
          ],
          globalCoord: false
        }
      },
      data: value,
      label: {
        show: true,
        distance: 2,
        color: '#81E1FF',
        position: 'right',
        formatter: (item) => {
          return digitFormat(item.value)
        }
      }
    },
    {
      type: 'pictorialBar',
      itemStyle: {
        color: 'rgb(1,13,91)'
      },
      gridIndex: 0,
      symbolRepeat: 'fixed',
      symbolMargin: '4',
      symbol: 'rect',
      symbolClip: true,
      symbolSize: [3, 9],
      symbolPosition: 'start',
      data: value,
      symbolOffset: [-3, 0]
    },
    {
      type: 'bar',
      barWidth: 9,
      xAxisIndex: 1,
      yAxisIndex: 1,
      legendHoverLink: true,
      z: -100,
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 1,
              color: '#C45DFF'
            },
            {
              offset: 0,
              color: '#C45DFF'
            }
          ],
          globalCoord: false
        }
      },
      data: value2,
      label: {
        show: true,
        distance: 2,
        color: '#81E1FF',
        position: 'left',
        formatter: (item) => {
          return digitFormat(item.value)
        }
      }
    },
    {
      type: 'pictorialBar',
      itemStyle: {
        color: 'rgb(1,13,91)'
      },
      xAxisIndex: 1,
      yAxisIndex: 1,
      symbolRepeat: 'fixed',
      symbolMargin: '4',
      symbol: 'rect',
      symbolClip: true,
      symbolSize: [3, 9],
      symbolPosition: 'start',
      symbolOffset: [3, 0],
      data: value2
    }
  ]
}`
    },
    {
        id: 3,
        code: `const xAxisData = ['12月', '01月', '02月', '03月', '04月', '05月', '06月']
const seriesData = [550, 162, 317, 1459, 396, 0, 0]
const options = {
  backgroundColor: "rgba(1,57,134)",
  grid: {
    top: '18%',
    left: '5%',
    right: '5%',
    bottom: '8%',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        type: 'solid'
      }
    },
    padding: [5, 10],
    backgroundColor: 'rgba(179,206,255,0.8)',
    borderWidth: 0,
    textStyle: {
      color: '#195EDF',
      fontSize: 12
    },
    extraCssText: 'z-index: 2;',
    formatter: \`{b}<br />{a}：{c}个\`

  },
  xAxis: {
    type: 'category',
    data: xAxisData,
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255,255,255,0.21)'
      }
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      fontSize: 14,
      color: 'rgba(243,255,255,0.88)'
    },
  },
  yAxis: {
    name: '个',
    nameTextStyle: {
      color: 'rgba(243,255,255,0.88)',
      padding: [0, 0, 0, -18]
    },
    type: 'value',
    minInterval: 2,
    splitLine: { // 网格线
      show: true,
      lineStyle: {
        color: 'rgba(255,255,255,0.08)',
        type: [5, 7]
      }
    },
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: true,
      fontSize: 14,
      color: 'rgba(243,255,255,0.88)'
    },
  },
  series: [
    {
      data: seriesData,
      type: 'line',
      name: '阈值信号',
      color: '#1DFDFD',
      symbol: 'none',
      lineStyle: {
        width: 2
      },
      areaStyle: {
        color: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgba(29,253,253,0.5)' // 0% 处的颜色 rgba(29,253,253,0.4)
          },
          {
            offset: 0.7,
            color: 'rgba(29,253,253,0.5)' // 100% 处的颜色 rgba(29,253,253,0.1)
          },
          {
            offset: 1,
            color: 'rgba(29,253,253,0.5)' // 100% 处的颜色 transparent
          }]
        },
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      },
    }
  ]
}

`
    },
    {
        id: 4,
        code: `const xAxisData = ['杭州', '宁波', '温州', '湖州', '嘉兴', '绍兴', '金华', '衢州', '舟山', '台州', '丽水']
const seriesData = ['47', '4', '47', '4', '0', '87', '13', '159', '0', '23', '30']
const options = {
  backgroundColor: "rgba(1,57,134)",
  grid: {
    top: '15%',
    left: '5%',
    right: '5%',
    bottom: '5%',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    padding: [5, 10],
    backgroundColor: 'rgba(179,206,255,0.8)',
    borderWidth: 0,
    textStyle: {
      color: '#195EDF',
      fontSize: 12
    },
    extraCssText: 'z-index: 2;',
    formatter: (val) => {
      return val[0].name + '<br/>' + val[0].seriesName + '：' + val[0].value + '个'
    }
  },
  xAxis: {
    type: 'category',
    data: xAxisData,
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(172,192,235,0.9)'
      }
    },
    axisTick: {
      show: false,
    },
    axisLabel: {},
  },
  yAxis: {
    type: 'value',
    name: '个',
    nameTextStyle: {
      color: '#fff',
    },
    splitLine: { // 网格线
      show: true,
      lineStyle: {
        color: 'rgba(142,153,177,.6)',
        type: [5, 10]
      }
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(172,192,235,0.9)'
      }
    },
    axisLabel: {
      show: true,
      fontSize: 12,
      color: '#fff'
    },
  },
  series: [
    {
      data: seriesData,
      type: 'bar',
      name: '产品数量',
      itemStyle: {
        borderRadius: [10, 10, 0, 0],
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#54F7C8' // 上
            },
            {
              offset: 1,
              color: '#01D5FB' // 下
            }
          ],
          globalCoord: false // 缺省为 false
        }
      },
      barMaxWidth: '35%',
    }
  ]
}`
    }
]

export default codeList
