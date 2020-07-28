// in src/App.js
import * as React from "react";
//import jsonServerProvider from 'ra-data-json-server';
import {fetchUtils, Admin, Resource } from 'react-admin';
//Components
import { DepartamentoList, DepartamentoEdit, DepartamentoCreate } from './departamentos';
import { TdiabetesList, TdiabetesEdit, TdiabetesCreate } from './tdiabetes';
import { UserList } from './users';
import {PostList, PostEdit, PostCreate} from './posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider'
import simpleRestProvider from './ra-strapi-rest';
import Cookies from './helpers/Cookies';
//Leguajes
import polyglotI18nProvider from 'ra-i18n-polyglot';
import spanishMessages from '@blackbox-vision/ra-language-spanish';

const i18nProvider = polyglotI18nProvider(() => spanishMessages, 'es');

const httpClient = (url, options = {}) => {
     if (!options.headers) {
         options.headers = new Headers({ Accept: 'application/json' });
     }
     const token = Cookies.getCookie('token')
     options.headers.set('Authorization', `Bearer ${token}`);
     return fetchUtils.fetchJson(url, options);
 }

 const dataProvider = simpleRestProvider('http://localhost:1337', httpClient);
const App = () => (
     <Admin dashboard={Dashboard} authProvider ={authProvider} dataProvider={dataProvider} i18nProvider={i18nProvider}>
          <Resource name="users" list={UserList} icon={UserIcon} />
          <Resource name="posts" list={PostList} edit={PostEdit} create = {PostCreate} icon={PostIcon}/>
          <Resource name="departamentos" list={DepartamentoList} edit={DepartamentoEdit} create = {DepartamentoCreate} icon={UserIcon} />
          <Resource options={{ label: 'Tipos Diabetes' }} name="tdiabetes" list={TdiabetesList} edit={TdiabetesEdit} create = {TdiabetesCreate} icon={UserIcon} />
      </Admin>
);

export default App;