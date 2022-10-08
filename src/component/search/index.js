import React, {useState, useEffect} from 'react'
import { Select } from 'antd';
import { Button, Input,  } from 'antd';
import './search.scss';
import { useHistory } from 'react-router-dom';

const { Option } = Select;

function Searchfields( props) {

  const [userFilter, setuserFilter] = useState([]);
  const [objectLevel, setobjectLevel] = useState([]);

  const query = useHistory().location.search;
  const token = new URLSearchParams(query).get("token");

  useEffect(() => {
      fetch(`${process.env.REACT_APP_BASE_URL}/users?&token=${token}`)
      .then((res) => res.json())
      .then((response) => {
        setuserFilter(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/levels?&token=${token}`)
    .then((res) => res.json())
    .then((response) => {
      setobjectLevel(response.data);
    })
    .catch((error) => {
      alert(error.message);
    });
  }, [])
  

  return (
    <div className='px-lg-4 py-4 px-0 search-field m-0'>
      <div className='d-flex align-items-center row'>
        <div className='d-flex align-items-center col-lg-4 col-md-12 pb-lg-0 pb-md-3 pb-3 col-12 pe-2'>
          <div className='pe-2 ps-0 flex-1'>
            <Input className='w-100' placeholder={props.placeholder} onChange={props.handleSearch} allowClear/>
          </div>
          <Button onClick={props.handleSearchuser}>Search</Button>
        </div>
        <div className='col-lg-4 col-md-6 col-6'>
          <Select
            className='w-100'
            placeholder="Select User"
            onChange={props.handleSelect}
            allowClear
          >
            {userFilter?.map(listUser =>
              <Option key={listUser.id} value={JSON.stringify(listUser)}>{listUser.name}</Option>
            )}
          </Select>
        </div>
        <div className='col-lg-4 col-md-6 col-6'>
          <Select
            className='w-100'
            placeholder="Select Level of Hierarchy"
            onChange={props.handleLevelselect}
            allowClear
          >
            {objectLevel?.map(UserObjectlist => 
              <Option key={UserObjectlist.id} value={JSON.stringify(UserObjectlist)}>{UserObjectlist.name}</Option>
            )}
          </Select>
        </div>
      </div>
    </div>
  )
}

export default Searchfields