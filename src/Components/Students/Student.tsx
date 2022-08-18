import React, { useEffect, useState } from 'react'
import studentsData from './data';
export const Student = () => {
  const [dropdown, setDropDown] = useState();
  const [st, setSt] = useState([...studentsData]);
  const [filterdata, setFilterData] = useState<any>([...studentsData]);
  const [backupFilterData, setBackupFilterData] = useState<any>([]);
  const handleSubmit = (e: any) => {
    setDropDown(e.target.value);
    // debugger
    submitVal(e.target.value)
  }
  const submitVal = (value: any) => {
    if (value != 'all') {
      let filterdataa: any = st.filter((val: any) => val.class === value)
      console.log(filterdataa);
      setFilterData([...filterdataa]);
      setBackupFilterData([...filterdataa]);
    } else {
      setBackupFilterData([...st]);
      setFilterData([...st]);
    }
  }
  debugger
  useEffect(() => {
    if (!filterdata.length) {
      setFilterData(studentsData)
    }
  }, [])
  const springBtn = (e: any) => {
    setDropDown(e.target.value);
    let filterdataa: any = backupFilterData.filter((val: any) => val.class === e.target.value || val.session === 'spring');
    setFilterData(filterdataa)
  }
  console.log(backupFilterData)
  const FallBtn = (e: any) => {
    setDropDown(e.target.value);
    let filterdataa: any = backupFilterData.filter((val: any) => val.class === e.target.value || val.session === 'Fall');
    setFilterData(filterdataa)
  }
  const allBtn = (e: any) => {
    setDropDown(e.target.value);
    // let filterdataa: any = filterdata.filter((val:any) => val.class=== e.target.value || val.session==='Fall');
    setFilterData(backupFilterData)
  }
  console.log("filterdata", filterdata)
  return (
    <div>
      <div className="Dashboard">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
            </div>
            <div className="col-lg-4">
              <h1>Students Details</h1>
            </div>
            <div className="col-lg-4">
              <select name="languages" id="lang" value={dropdown} className="Dropdown" onChange={handleSubmit}>
                <option value="all">All</option>
                <option value="BSCs">BSCs</option>
                <option value="Bs IT">Bs IT</option>
                <option value="Msc">Msc</option>
                <option value="DATA Science">	DATA Science</option>
                <option value="Ms computer">	Ms computer</option>
                <option value="Bs">	Bs</option>
                <option value="Bsc">	Bsc</option>
              </select>
              <div className="col-lg-4">
                <button className='All' onClick={allBtn}>All</button>
                <button className='spring' onClick={springBtn}>Spring</button>
                <button className='Fall' onClick={FallBtn}>Fall</button>
              </div>
            </div>
          </div>
        </div>
        <table>
          <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>Class</th>
            <th>Session</th>
          </tr>
          <tbody>
            {filterdata?.length > 0 ?
              filterdata?.map((item: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>{item?.name}</td>
                    <td>{item?.roll}</td>
                    <td>{item?.class}</td>
                    <td>{item?.session}</td>
                    <td>
                    </td>
                  </tr>
                )
              }) : (
                <h1>Search Data Not Found</h1>
              )
            }
          </tbody>
        </table >
      </div>
    </div>
  )
}
export default Student;