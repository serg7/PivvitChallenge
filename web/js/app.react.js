
class PurchaseTable extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    renderRows()
    {
        return this.props.purchases.map(purchase => {
            return <PurchaseTableRow purchase={purchase} />
        });
    }

    render()
    {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Purchase Id</th>
                        <th>Offering Title</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        );
    }
}

class PurchaseTableRow extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <tr>
                <td>{this.props.purchase.id}</td>
                <td>{this.props.purchase.title}</td>
                <td>{this.props.purchase.quantity}</td>
                <td>{this.props.purchase.price}</td>
                <td>{this.props.purchase.price * this.props.purchase.quantity}</td>
            </tr>
        );
    }
}

class PurchasesList extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            purchases: []
        };
    }

    componentDidMount()
    {
        this.loadPurchases();
    }

    loadPurchases()
    {

        fetch('/purchases')
            .then(results => {
                if (results.headers.get("content-type")
                    && results.headers.get("content-type").toLowerCase().indexOf("application/json") >= 0) {
                    return results.json();
                } else {
                    throw new TypeError()
                }
            }).then(data => {
                let purchases = data.map((purchase) => {
                    return purchase;
                });

                this.setState({purchases: purchases});
            });
    }

    render() {
        return (
            <div>
                <h2>Purchases list</h2>
                <PurchaseTable purchases={this.state.purchases} />
            </div>
        );
    }
}

ReactDOM.render(<PurchasesList />, document.getElementById('app'));