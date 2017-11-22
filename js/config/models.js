import Realm from 'realm';

const FaveSchema = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date'
  }
};

const realm = new Realm({schema: [FaveSchema]});

export const queryFaves = () => {
  return realm.objects('Fave');
}

export const deleteFaves = (faveId) => {
  let fave = realm.objects('Fave').filter("id == $0", faveId)
  try {
    realm.write(() => { 
      realm.delete(fave); 
    })
  } catch (e) {
    console.log ("Error on deleting");
  }
}

export const createFaves = (session_id) => {
  try{
    realm.write(() => {
      realm.create('Fave', {id: 'session_id', faved_on: new Date()});
    });
  } catch (e) {
    console.log ("Error on creation");
  }  
}

export default realm;

