const fetch_jobsdata_api = "http://localhost:8082/jobposts";
class FetchApiService {
  getJobPosts() {
    return fetch(fetch_jobsdata_api, {
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
