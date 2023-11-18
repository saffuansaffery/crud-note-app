/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xrrcqp93b6e070b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "loav05tl",
    "name": "User",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xrrcqp93b6e070b")

  // remove
  collection.schema.removeField("loav05tl")

  return dao.saveCollection(collection)
})
