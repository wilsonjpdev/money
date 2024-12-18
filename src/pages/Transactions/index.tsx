import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles"

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width='40%'>Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>18/12/2024</td>
                        </tr>
                        <tr>
                            <td width='40%'>Hamburguer</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    -R$59,00
                                </PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>10/12/2024</td>
                        </tr>
                        <tr>
                            <td width='40%'>Aluguel</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    -R$1.200,00
                                </PriceHighlight>
                            </td>
                            <td>Casa</td>
                            <td>02/12/2024</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}
