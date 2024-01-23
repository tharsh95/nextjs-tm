
const login = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'User',
      email: 'user@nextmail.com',
      password: '123456',
      role:'admin'
    },
  ];
  
  
  const tasks = [
    {
      login_id: login[0].id,
      title:"Integrate Equifax",
      description:"Integrate Equifax for verification purpose",
      link:"https://docs.google.com/document/d/1Svh34-n5ah9bKT0LDTLQ7eR0vU753o86zjIE1XSvUkg/preview?pru=AAABcs24IW0*g1VD7gdobeM2HXUQpJvlAA#",
      status:"Backlog",
      deletedBy:"null",
      isDeleted:"0",
      date: '2022-06-05'
      },
    {
      login_id: login[0].id,
      title:"T1",
      description:"D1",
      link:"https://docs.google.com/document/d/1Svh34-n5ah9bKT0LDTLQ7eR0vU753o86zjIE1XSvUkg/preview?pru=AAABcs24IW0*g1VD7gdobeM2HXUQpJvlAA#",
      status:"Active",
      deletedBy:"null",
      isDeleted:"0",
      date: '2022-06-05'
      },
    {
      login_id: login[0].id,
      title:"T2",
      description:"D2",
      link:"https://docs.google.com/document/d/1Svh34-n5ah9bKT0LDTLQ7eR0vU753o86zjIE1XSvUkg/preview?pru=AAABcs24IW0*g1VD7gdobeM2HXUQpJvlAA#",
      status:"Finished",
      deletedBy:"null",
      isDeleted:"0",
      date: '2022-06-05'
      },
    {
      login_id: login[0].id,
      title:"T3",
      description:"D3",
      link:"https://docs.google.com/document/d/1Svh34-n5ah9bKT0LDTLQ7eR0vU753o86zjIE1XSvUkg/preview?pru=AAABcs24IW0*g1VD7gdobeM2HXUQpJvlAA#",
      status:"Backlog",
      deletedBy:"null",
      isDeleted:"0",
      date: '2022-06-05'
      },
   
  ];
  
  
  module.exports = {
    login,
    tasks,
  };
