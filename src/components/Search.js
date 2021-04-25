import { EuiFieldSearch } from '@elastic/eui';
import React from 'react'
import ReactDOM from 'react-dom'

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      value: '',
      isClearable: ''
    }
  }
  
  render() {
    let isClearable = true
    let onChange = e =>{
      this.setState({
        value: e.target.value
      })
    }
    let search = (
      <EuiFieldSearch
        placeholder="搜索"
        value={this.state.value}
        isClearable={isClearable}
        incremental= {Boolean(1)}
        onChange={e=>{
          onChange(e)
        }}
        
      />
    )
    return (
        search
    )
  }
  
}


export default Search

