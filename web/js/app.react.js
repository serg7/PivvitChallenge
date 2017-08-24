
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
            <table className="table table-striped">
                <thead className="thead-inverse">
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


class PurchaseForm extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    createPurchase()
    {

    }

    render()
    {
        return(
            <div>
                <h3>Create new purchase</h3>
                <form onSubmit={this.createPurchase.bind(this)}>
                    <div className="form-group">
                        <label for="customerName">Customer Name</label>
                        <input className="form-control" type="text" ref="customerName" id="customerName" />
                    </div>

                    <div className="form-group">
                        <label for="quantity">Quantity</label>
                        <input className="form-control" type="number" ref="quantity" id="quantity" />
                    </div>

                    <button className="btn btn-info">Create</button>
                </form>
            </div>
        )
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
                <h3>Purchases list</h3>
                <PurchaseTable purchases={this.state.purchases} />
                <hr/>
                <PurchaseForm />
            </div>
        );
    }
}

ReactDOM.render(<PurchasesList />, document.getElementById('app'));