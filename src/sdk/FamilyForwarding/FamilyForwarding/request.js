import { useQuery } from "react-query";
import http from "../../../services/axios";
import { getToken, logout } from "../../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

  export const CreateForwardingRequest = async (body) => {
    return await http.post("/bff/foui-forwarding", body, config)
}
  
  const AllForwardingFamilyRequest = async (id) => {
    try {
      return await http.get("/bff/foui-forwarding/family",{ params: { familyId: id} }, config).then(response => response.data)
        .catch(err => {
          if (err.response.status === 401 || err.response.status === 403) {
            logout();
            window.location.reload()
          }
          throw err;
        });
    } catch (err) {
      console.log(err)
    }
  }

  const AllForwardingRequest = async (id) => {
    try {
      return await http.get("/bff/forwarding",{ params: { familyId: id} }, config).then(response => response.data)
        .catch(err => {
          if (err.response.status === 401 || err.response.status === 403) {
            logout();
            window.location.reload()
          }
          throw err;
        });
    } catch (err) {
      console.log(err)
    }
  }

  // const EditTrackingRequest = async (body) => {
  //   try {
  //     return await http.put("/bff/forwarding", body, config)
  //     .catch(err => {
  //       if (err.response.status === 401 || err.response.status === 403) {
  //         logout();
  //         window.location.reload()
  //       }
  //       throw err;
  //     });
  //     } catch (err) {
  //       console.log(err)
  //   }
  // } 

  export const useFetchAllForwardingFamily = (id) => {
    return useQuery("AllForwardingFamily", () => AllForwardingFamilyRequest(id));
  };

  export const useFetchAllForwarding = () => {
    return useQuery("AllForwarding", () => AllForwardingRequest());
  };
  