import {Page,Modal,ChoiceList,DescriptionList, TextField, Button, DataTable} from '@shopify/polaris';
import React, { useReducer } from 'react';
import reducer from './utils/reducer';

var initialState = {
  'Title' : '',
  'Description' : '',
  'Handling Time' : '',
  'Amazone Parent Sku' : '',
  'Barcode/GTIN exemption' : '',
  'Add Amazone Category' : '',
  'Image Selection' : '',
  'Modal' : false
}

function App() {
  const [state , dispatch] = useReducer(reducer , initialState)
  const fields = [
    {
      term : 'Title',
      description : <TextField onChange={(d)=>{dispatch({type:'Title' , payload : d})}} value={state['Title']}/>
    },
    {
      term : 'Description',
      description : <TextField onChange={(d)=>{dispatch({type:'Description' , payload : d})}} value={state['Description']}/>
    },
    {
      term : 'Handling Time',
      description : <TextField onChange={(d)=>{dispatch({type:'Handling Time' , payload : d})}} value={state['Handling Time']}/>
    },
    {
      term : 'Amazone Parent Sku',
      description : <TextField onChange={(d)=>{dispatch({type:'Amazone Parent Sku' , payload : d})}} value={state['Amazone Parent Sku']}/>
    },
    {
      term : 'Barcode/GTIN exemption',
      description : <TextField onChange={(d)=>{dispatch({type:'Barcode/GTIN exemption' , payload : d})}} value={state['Barcode/GTIN exemption']}/>
    },
    {
      term : 'Add Amazone Category',
      description : <TextField onChange={(d)=>{dispatch({type:'Add Amazone Category' , payload : d})}} value={state['Add Amazone Category']}/>
    },
    {
      term : 'Image Selection',
      description : <ChoiceList 
                      title=''
                      choices={[
                        {label : 'Set product images as shown in shopify' , value : 'Set product images as shown in shopify'},
                        {label : "Set Custom Amazone Images" , value : 'Set Custom Amazone Images'} 
                      ]}
                      selected = {[state['Image Selection']]}
                      onChange={(d)=>dispatch({type : 'Image Selection' , payload : d[0]})}
                    />
    }
  ]
  
  return (
    <Page>
      <DescriptionList
        items={fields}
      />
      <Button primary onClick={()=>dispatch({type : 'Modal' , payload : ''})} >View Data </Button>

      <Modal
        open={state['Modal']}
        onClose={()=>dispatch({type : 'Modal' , payload : ''})}
      >
        <Modal.Section>
          <DataTable 
            columnContentTypes={[]}
            headings={[]}
            rows={[...Object.entries(state).filter(data => data[0]!=='Modal')]}
          />
        </Modal.Section>

      </Modal>

    </Page>
  );
}

export default App;
