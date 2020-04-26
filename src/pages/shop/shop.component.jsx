import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import { firestore, convertCollectionsToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
    constructor() {
        super()

        this.state = {
            isLoading: true
        }
    }

    unsubscribeFromSnapshot = null

    componentDidMount() {
        const collectionRef = firestore.collection('collections')
        const { updateCollections } = this.props

        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionsToMap(snapshot)
            updateCollections(collectionMap)
            this.setState({ isLoading: false })
        })
    }

    render() {
        const { match } = this.props
        const { isLoading } = this.state
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)