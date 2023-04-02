const fetch_seekerprofile_api = "http://localhost:8084/seekerprofiles";
class FetchApiService {
  getSeekerProfiles() {
    return fetch(fetch_seekerprofile_api, {
      method: "get",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    }).then((res) => res.json());
  }
}

export default new FetchApiService();
