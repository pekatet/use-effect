import React, { Fragment, useEffect, useState } from 'react'

function Details ({info}) {
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(false)

  console.log('INFO  ', info)
  useEffect(() => {
    console.log(user)
    if (info.id !== '') {
      const fetchUser = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            process.env.REACT_APP_DATA_URL + info.id + '.json');
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const user = await response.json();
          setUser(user);
        } catch (e) {
          console.error(e);
        }
        finally {
          setLoading(false);
        }
      };
      fetchUser();
    }
  }, [info.id]);

  return(
    <Fragment>
      {loading && <p>Loading...</p>}
      {user && !loading &&
        <div>
          <img alt="avatar" src={user.avatar}/>
          <p>{user.name}</p>
          <p>City: {user.details && user.details.city}</p>
          <p>Company: {user.details && user.details.company}</p>
          <p>Position: {user.details && user.details.position}</p>
        </div>}
    </Fragment>
  )
}

export default Details;