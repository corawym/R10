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

// Query all faves
export const queryFaves = () => {
  return realm.objects('Fave');
}

// Delete a fave
export const deleteFaves = (faveId) => {
  let fave = realm.objects('Fave').filtered("id == $0", faveId)
  try {
    realm.write(() => { 
      realm.delete(fave); 
    })
  } catch (e) {
    console.log ("Error on deleting");
  }
}

// Add a fave
export const createFaves = (session_id) => {
  try{
    realm.write(() => {
      realm.create('Fave', {id: session_id, faved_on: new Date()});
    });
  } catch (e) {
    console.log ("Error on creation");
  }  
}

export default realm;

