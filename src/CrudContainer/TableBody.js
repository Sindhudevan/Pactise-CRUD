import React from 'react';
import '../Styles/tablebody.css'

const TableBody = (props) => {
    const tableData = props.tableData.map((item, index) => {
        return (
            <tr className="showMeOnHover" key={index}>
                <td className='tdSpaceid'>{index+1}</td>
                <td className='tdSpaceName'>{item.firstName} </td>
               <td className='tdSpaceName'> {item.lastName}</td>
                <td className='tdSpaceMedium'>{item.dob}</td>
                <td className='tdSpaceMedium'>{item.gender}</td>
                <td className='tdSpaceSocial'>{item.email}</td>
                <td className='tdSpaceSocial'>{item.phone}</td>
                <td className='tdSpaceAddress'>{item.communicationAddress}</td>
                <td className='tdSpaceAddress'>{item.permanentAddress}</td>
                <td className='tdSpaceid'>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                    <button onClick={(event)=>props.onEdit(index)}  className={"actionBtn"}>Edit</button>
                    <button onClick={(event)=>props.onDelete(index)} className={"actionBtn"}>Delete</button>
                    </div>
                </td>
            </tr>

        )
    })


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th className='tdSpaceid'>ID.No</th>
                        <th className='tdSpaceName'>FirstName</th>
                        <th className='tdSpaceName'>LastName</th>
                        <th className='tdSpaceMedium'>Date Of Birth</th>
                        <th className='tdSpaceMedium'>Gender</th>
                        <th className='tdSpaceSocial'>Email Address</th>
                        <th className='tdSpaceSocial'>Phone</th>
                        <th className='tdSpaceAddress' >Communication Address</th>
                        <th className='tdSpaceAddress' >Permanent Address</th>
                        <th className='tdSpaceMedium'>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {tableData}
                </tbody>
            </table>

        </div>

    );
};

export default TableBody;