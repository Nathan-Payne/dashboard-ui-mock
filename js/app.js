const averageChartId = document.getElementById('chart-average')
const cautiousChartId = document.getElementById('chart-cautious')
const complacentChartId = document.getElementById('chart-complacent')
const confidentChartId = document.getElementById('chart-confident')

class SplitBarChart {
  constructor(chartId) {
    this.chartId = chartId
    this.chartBars = this.chartId.querySelector('.chart-bars')

    this.populateData()
    this.chartId.addEventListener('click', this.populateData)
  }

  generateData = () => {
    let randomPercentages = []
    for (let i = 0; i < 5; i++) {
      randomPercentages.push((Math.random() * 50).toFixed(0))
    }
    this.generatedData = randomPercentages
    return randomPercentages
  }

  populateData = () => {
    let percentages = this.generateData()
    let bars = [...this.chartBars.children]
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.width = `${percentages[i]}%`
      bars[i].setAttribute('data-tooltip', `${percentages[i]}%`)
    }
  }
}

new SplitBarChart(averageChartId)
new SplitBarChart(cautiousChartId)
new SplitBarChart(complacentChartId)
new SplitBarChart(confidentChartId)
