import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import {HeroCard} from '../components'
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../helpers';
export const SearchPage = () => {
  //for changing the url
  const navigate = useNavigate();
  //for details location url
  const location = useLocation();
  //for extract url querys
  const {q = ''} = queryString.parse(location.search);

  const heroes = getHeroesByName(q);


  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && (heroes.length === 0);



  const {searchText ,onInputChange} = useForm({
    'searchText' : q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if( searchText.trim().length <= 1) return;
    navigate(`?q=${ searchText }`);
  }

  return (
    <>
        <h1>Search</h1>
        <hr />


        <div className='row'>

              <div className='col-5'>
                <h4>Searching</h4>
                <hr />

                <form action="" onSubmit={onSearchSubmit}>
                  <input 
                  type="text"
                  placeholder='Search hero'
                  className='form-control'
                  name='searchText'
                  autoComplete='off' 
                  value={searchText}
                  onChange={onInputChange}
                  />

                  <button className='btn btn-outline-primary mt-1'>Search</button>
                </form>
              </div>



              <div className='col-7'>
                <h4>Results</h4>
                <hr />


                <div className='alert alert-primary' style={{display : showSearch ? '' : 'none'}}>
                    Search Hero
                </div>

                <div className='alert alert-danger' style={{display : showError? '' : 'none'}}>
                    No hero with <b>{ q }</b>
                </div>

                {
                  heroes.map(hero =>  <HeroCard key={hero.id} {...hero}/>)
                }
                

              </div>
        </div>


    </>
  )
}
