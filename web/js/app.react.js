var Purchase = React.createClass({
    render: function() {
        return (
            <div>
                Purchase
            </div>
        );
    }
});

var PurchasesList = React.createClass({

    componentDidMount: function() {
        this.loadPurchases();
        setInterval(this.loadPurchases, 5000);
    },

    loadPurchases: function() {

        $.ajax({
            url: '/purchases',
            success: function (data) {
                this.setState({purchases: data});
            }.bind(this)
        });
    },

    renderPurchases()
    {
        this.loadPurchases();

        // return this.state.purchases.map((purchase) => {
        //     return <p>purchase</p>
        // });
    },

    render: function() {
        return (
            <div>
                <h2>Purchases list</h2>
                {this.renderPurchases()}
            </div>
        );
    }
});

ReactDOM.render(<PurchasesList />, document.getElementById('app'));