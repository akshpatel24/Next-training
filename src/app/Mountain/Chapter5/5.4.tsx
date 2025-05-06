"use client"
import { useState, useEffect } from "react";
interface GitHubUser {
    id: number;
    login: string;
    html_url: string;
    avatar_url: string;
  }
  
async function getData() {
  const response = await fetch('https://api.github.com/users');
  console.log(response);
  return response.json();
}

function FetchingData() {
  const [gitData, setGitData] = useState<GitHubUser[]>([]);
  const fetchUsers = async () => {
    const data = await getData();
    setGitData(data);
  };

  useEffect(() => {
    fetchUsers(); // Runs once on mount
  }, []);

  return (
    <>
      <h2>GitHub Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Login</th>
            <th>Profile Link</th>
            <th>Image</th>
          </tr>
        </thead>``
        <tbody>
          {gitData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.login}</td>
              <td><a href={user.html_url}>CLick this</a></td>
              <td>          
                <img src={user.avatar_url}></img>
              </td>
              {/* <td>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FetchingData;
