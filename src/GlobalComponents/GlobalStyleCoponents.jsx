import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: ${(props) => props.column ? 'column' : 'row'};
    padding-top: 20px;
`

export const Theme = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1,h2,h3,h4,p {
        margin: 0;
    }
`

// AddTRansaction
export const AddTransactionGroup = styled.div`
    padding: 10px 0 10px 0;

    h3{
        padding-bottom: 10px;
        border-bottom: 1px solid black;
    }

    form {
        padding-top: 10px;
        display: flex;
        flex-direction: column;
    }

    .form-control{
        display: flex;
        flex-direction: column;
        padding: 5px 0 5px 0;
    }

    .form-control label{
        padding: 5px 0 5px 0;
    }

    .form-control input {
        padding: 10px;
        border: 1px solid #ccc;
    }

    .btn{
        border: none;
        color: #fff;
        background: grey;
        padding: 20px;
    }
`

// Balance
export const GroupBalance = styled.div`    
    padding: .5rem 0 .5rem 0;
`


// IncomeExpenses
export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    
`
export const Group = styled.div`
    padding: 20px 50px 20px 50px;
    background: #fff;
    
    text-transform: uppercase;
    text-align: center;

    .money-plus{
        color: #25BF6C;
    }
    .money-minus{
        color: red;
    }
    
`

// TransactionList
export const TransactionGroup = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0 2rem 0;

    h3{
        border-bottom: 1px solid black;
        padding-bottom: 10px;
    }

    ul{
        padding-top: 20px;
        overflow: auto;
    }
    li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #fff;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        height: 40px;
        padding: 0 10px 0 10px;
        margin: 10px 0 10px 0;
        border-right: 6px solid lightgrey;
    }
    .minus{
        border-color: red;
    }
    .plus{
        border-color: #25BF6C;
    }

    .delete-btn{
        background: red;
        height: 20px;
        width: 20px;
        border: none;
        border-radius: 20%;
        color: #fff;
    }
`