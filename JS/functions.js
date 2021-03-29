window.onload = () => {

    


    let balance = {
        incomes: [300],
        expenses:[500],
      }
      
      function sum (array){
        let  total = 0;
        for(let value of array){
          total += value
        }
        return total
      }
      
      function calculateBalance(){
        const calculateIncomes = sum(balance.incomes)
        const calculateExpenses = sum(balance.expenses)
        
        let total = calculateIncomes - calculateExpenses;
        
        let balanceText = 'negativo'
        
        if(total>=0){
          balanceText = 'positivo'
        }
        document.getElementById('total').innerHTML = `Seu saldo é ${balanceText} = ${total.toFixed(2)} R$`
      }
      calculateBalance();
      
      /*GRAFICO*/
      var ctx = document.getElementById('myChart').getContext('2d');
      var myPieChart = new Chart(ctx, {
          type: 'doughnut',
          data:{
          datasets: [{
              data: [sum(balance.incomes),sum(balance.expenses)],
            backgroundColor:[
            'rgb(100, 255, 218)',
             'rgb(244, 67, 54)'
            ]
          }],
          labels: [
              'Entradas',
              'Saidas',
              
          ]
      }});
}
