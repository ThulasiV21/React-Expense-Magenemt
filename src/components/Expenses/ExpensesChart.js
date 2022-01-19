import Chart from "../Chart/Chart";

const ExpensesChart = props => {
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); 
        // getMonth() returns a month as a value starting at 0, meaning Jan = 0
        // Since our chartDataPoints array also is a list of months from Jan having an index as 0,
        // We can use the value returned from getMonth() directly as index value for the array, since values match
         chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />
};

export default ExpensesChart;