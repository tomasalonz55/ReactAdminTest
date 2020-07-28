import * as React from "react";
import {  List,   Datagrid, TextField,  EditButton, Edit,SimpleForm, TextInput, Create} from 'react-admin';
//import MyUrlField from './MyUrlField'

export const TdiabetesList = props => (
    <List {...props} title="Tipos de Diabetes" >
        <Datagrid >
            <TextField source="id" />
            <TextField source="DESCRIPCION" />
            <EditButton/>
        </Datagrid>
    </List>
);

export const TdiabetesEdit = props => (
    <Edit {...props}>
        <SimpleForm>
        <TextInput disabled source="id" />
            <TextInput source="DESCRIPCION" />
        </SimpleForm>
    </Edit>
);
export const TdiabetesCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="DESCRIPCION" />

        </SimpleForm>
    </Create>
);