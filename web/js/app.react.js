var Purchase = React.createClass({
    render: function() {
        return (
            <div>
                Purchase
            </div>
        );
    }
});

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
                console.log(this.state.purchases);
            });

    }

    renderPurchases()
    {
        return this.state.purchases.map((purchase) => {
            return (
                <div>
                    <p>{purchase.id}</p>
                    <p>{purchase.title}</p>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h2>Purchases list</h2>
                {this.renderPurchases()}
            </div>
        );
    }
}

ReactDOM.render(<PurchasesList />, document.getElementById('app'));