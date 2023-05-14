const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com/api'
import React from "react";


export const registerUser = async (userObject) => {
  console.log(userObject)
  try {
    console.log(userObject)
      const response = await fetch(
          `${BASE_URL}/users/register`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userObject.user)
        });
      // const result = response.json();
      const { success, error, data} = await response.json();
      console.log(success != undefined && data != undefined);
      if (success != undefined && data != undefined) {
        const { token, message } = data;
        localStorage.setItem("token", token);
        return { token, message};
      }
      if (!success && !error) {
        return { error};
      }
      console.log(success, error, data);
  }
  catch(error) {
      console.error(error);
  }
};


      export const loginUser = async (userObject) => {
        console.log(userObject.user)
        try {
            const response = await fetch(
                `${BASE_URL}/users/login`, {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(userObject.user)
              });
            // const result = response.json();
            const {message, token, user} = await response.json();
            if (token) {
              localStorage.setItem("token", token);
              localStorage.setItem("user", JSON.stringify(user));
              return { token, message, user};
            }
            if (error) {

                return { error, message};
            }
        }
        catch(error) {
            console.error(error);
        }
    };
    
    export const myData = async (token) => {
        try {
          const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${ token }`,
            },
          });
          const result = await response.json();
          console.log(result);
          return result
        } catch (error) {
          console.error(error);
        }
      }

    
      export const getMe = async (token) => {
        try {
          const response = await fetch(
            `${API}/users/me`, {
              method: "GET",
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
              }
            })
            const { success, error, data} = await response.json();
            if(success) {
              return data;
            } 
            if(!success && error) {
              return error;
            }
            return;
        } catch (error) {
          console.error(error)
        }
      };

     export const getUserRoutines = async () => {

        try {
          const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
          });
          const result = await response.json();
          console.log(result);
          return result
        } catch (error) {
          console.error(error);
        }
      }

      export const makeRoutine = async (newRoutine, token) => {
        try {
          const response = await fetch(`${BASE_URL}/routines`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(newRoutine),
          });
          const result = await response.json();
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
        }
      };

    export  const getActivities = async () => {
        try {
          const response = await fetch(`${BASE_URL}/activities`, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          const result = await response.json();
      
          console.log(result);
          return result
        } catch (error) {
          console.error(error);
        }
      }
   export const makeActivity = async () => {
        try {
          const response = await fetch(`${BASE_URL}/activities`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: 'Running',
              description: 'Keep on running!'
            }) 
          });
      
          const result = await response.json();
      
          console.log(result);
          return result
        } catch (error) {
          console.error(error);
        }
      }

//     export  const patchActivitiesActivityId = async () => {
//         try {
//           const response = await fetch(`${BASE_URL}/activities`, {
//             headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${TOKEN_STRING_HERE}`
//             },
//             method: "PATCH",
//             body: JSON.stringify({
//               name: 'Running',
//               description: 'Keep on running, til you drop!'
//             })
//           });
      
//             const result = await response.json();
//             console.log(result);
//             return result
//           } catch (error) {
//           console.error(error);
//           }
//       }

//  export const getApiActivitiesActivityIdRoutines = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/activities/3/routines`, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const result = await response.json();
//       console.log(result);
//       return result
//     } catch (error) {
//       console.error(error);
//     }
//   }     
export const getAllRoutines = async () => {
  //console.log("hello from getAllRoutines")
  try {
  const response = await fetch(`${BASE_URL}/routines`, {
    headers: {
    'Content-Type': 'application/json',
    },
  });
  
  const result = await response.json();
  console.log(result);
  return result
  } catch (err) {
  console.error(err);
  }
  }
export const getPrivateRoutines = async () => {
  //console.log("hello from getAllRoutines")
  try {
    let user = JSON.parse(localStorage.getItem("user"));
  const response = await fetch(`${BASE_URL}/routines`, {
    headers: {
    'Content-Type': 'application/json',
    },
    method: "POST",
    body: JSON.stringify({userID: user._id})
  });
  
  const result = await response.json();
  console.log(result);
  return result
  } catch (err) {
  console.error(err);
  }
  }




  // export const getAllRoutines  = async () => {
  //   try {
  //   const response = await fetch(`${BASE_URL}/routines`, {
  //     headers: {
  //     'Content-Type': 'application/json',
  //     },
  //   });
    
  //   const result = await response.json();
  //   console.log(result);
  //   return result
  //   } catch (error) {
  //   console.error(error);
  //   }
  //   }

// export const makeRoutines = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/routines`, {
//         method: "POST",
//         headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({newRoutine})
//       });
//       const result = await response.json();
//       console.log(result);
//       return result
//     } catch (error) {
//       console.error(error);
//     }
//   }    

// export const patchRoutinesRoutineId = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/routines/6`, {
//         method: "PATCH",
//         headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${TOKEN_STRING_HERE}`
//         },
//         body: JSON.stringify({
//           name: 'Long Cardio Day',
//           goal: 'To get your heart pumping!'
//         })
//       });
//       const result = await response.json();
//       console.log(result);
//       return result
//     } catch (error) {
//       console.error(error);
//     }
//   }


  export const deleteRoutine = async () => {
    try {
      const response = await fetch(`${BASE_URL}/routines/${routineIdToDelete}`, {
        method: "DELETE",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (error) {
      console.error(error);
    }
}
      
export const postRoutinesRoutineIdActivities = async () => {
    try {
      const response = await fetch(`${BASE_URL}/routines/6/activities`, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          activityId: 7,
          count: 1, 
          duration: 20
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (error) {
      console.error(error);
    }
  }

  export const patchRoutine_ActivitiesRoutineActivityId = async () => {
    try {
      const response = await fetch(`${BASE_URL}/routine_activities/11`, {
        method: "PATCH",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          count: 2,
          duration: 30
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (error) {
      console.error(error);
    }
  }
      
  export const deleteRoutinActivitiesbyId = async () => {
    try {
      const response = await fetch(`${BASE_URL}/routine_activities/11`, {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (error) {
      console.error(error);
    }
  };

  export const updateEntireRoutine = async(routine, token, routineId) => {
    try {
        const response = await fetch(`${BASE_URL}/routine/${routineId}`,{
            method:'PUT',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(routine),
        });
        const result = await response.json();
        return result;
        
    }catch (error) {
        console.error(error)
    }
};