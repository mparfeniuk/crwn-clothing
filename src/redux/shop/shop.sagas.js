import { takeLatest, call, put } from 'redux-saga/effects'
import { firestore, convertCollectionsToMap } from '../../firebase/firebase.utils'

import ShopActionTypes from './shop.types'
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions'

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionMap = yield call(convertCollectionsToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionsAsync
    )
}