import { createSelector } from "reselect"

const selectShop = state => state.shop

export const selectCollection = collectionUrlParam => (
    createSelector(
        [selectCollections],
        collection => (collection ? collection[collectionUrlParam] : null)
    )
)

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? 
        Object.keys(collections).map(key => collections[key]) : []
)