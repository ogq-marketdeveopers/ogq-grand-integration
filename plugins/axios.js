export default function ({ $axios, redirect }) {
  $axios.setBaseURL('http://grand.market.ogqcorp.com:8080')

  $axios.onError(error => {
    if(error.response.status === 500) {
      redirect('/sorry')
    }
  })
}
