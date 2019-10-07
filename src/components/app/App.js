import React, { Component } from 'react';
import {UserDetails} from "../user-details/user-details";

import './App.css';

export default class App extends Component {



render() {


    const users = [
        {
            "login": "blynkkk",
            "id": 11541426,
            "node_id": "MDQ6VXNlcjExNTQxNDI2",
            "avatar_url": "https://avatars1.githubusercontent.com/u/11541426?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/blynkkk",
            "html_url": "https://github.com/blynkkk",
            "followers_url": "https://api.github.com/users/blynkkk/followers",
            "following_url": "https://api.github.com/users/blynkkk/following{/other_user}",
            "gists_url": "https://api.github.com/users/blynkkk/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/blynkkk/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/blynkkk/subscriptions",
            "organizations_url": "https://api.github.com/users/blynkkk/orgs",
            "repos_url": "https://api.github.com/users/blynkkk/repos",
            "events_url": "https://api.github.com/users/blynkkk/events{/privacy}",
            "received_events_url": "https://api.github.com/users/blynkkk/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1.0
        },
        {
            "login": "tshemsedinov",
            "id": 4405297,
            "node_id": "MDQ6VXNlcjQ0MDUyOTc=",
            "avatar_url": "https://avatars2.githubusercontent.com/u/4405297?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/tshemsedinov",
            "html_url": "https://github.com/tshemsedinov",
            "followers_url": "https://api.github.com/users/tshemsedinov/followers",
            "following_url": "https://api.github.com/users/tshemsedinov/following{/other_user}",
            "gists_url": "https://api.github.com/users/tshemsedinov/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/tshemsedinov/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/tshemsedinov/subscriptions",
            "organizations_url": "https://api.github.com/users/tshemsedinov/orgs",
            "repos_url": "https://api.github.com/users/tshemsedinov/repos",
            "events_url": "https://api.github.com/users/tshemsedinov/events{/privacy}",
            "received_events_url": "https://api.github.com/users/tshemsedinov/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1.0
        },
        {
            "login": "akella",
            "id": 76031,
            "node_id": "MDQ6VXNlcjc2MDMx",
            "avatar_url": "https://avatars2.githubusercontent.com/u/76031?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/akella",
            "html_url": "https://github.com/akella",
            "followers_url": "https://api.github.com/users/akella/followers",
            "following_url": "https://api.github.com/users/akella/following{/other_user}",
            "gists_url": "https://api.github.com/users/akella/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/akella/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/akella/subscriptions",
            "organizations_url": "https://api.github.com/users/akella/orgs",
            "repos_url": "https://api.github.com/users/akella/repos",
            "events_url": "https://api.github.com/users/akella/events{/privacy}",
            "received_events_url": "https://api.github.com/users/akella/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1.0
        },
        {
            "login": "LisaDziuba",
            "id": 23191656,
            "node_id": "MDQ6VXNlcjIzMTkxNjU2",
            "avatar_url": "https://avatars0.githubusercontent.com/u/23191656?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/LisaDziuba",
            "html_url": "https://github.com/LisaDziuba",
            "followers_url": "https://api.github.com/users/LisaDziuba/followers",
            "following_url": "https://api.github.com/users/LisaDziuba/following{/other_user}",
            "gists_url": "https://api.github.com/users/LisaDziuba/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/LisaDziuba/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/LisaDziuba/subscriptions",
            "organizations_url": "https://api.github.com/users/LisaDziuba/orgs",
            "repos_url": "https://api.github.com/users/LisaDziuba/repos",
            "events_url": "https://api.github.com/users/LisaDziuba/events{/privacy}",
            "received_events_url": "https://api.github.com/users/LisaDziuba/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1.0
        },
        {
            "login": "asvetlov",
            "id": 356399,
            "node_id": "MDQ6VXNlcjM1NjM5OQ==",
            "avatar_url": "https://avatars0.githubusercontent.com/u/356399?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/asvetlov",
            "html_url": "https://github.com/asvetlov",
            "followers_url": "https://api.github.com/users/asvetlov/followers",
            "following_url": "https://api.github.com/users/asvetlov/following{/other_user}",
            "gists_url": "https://api.github.com/users/asvetlov/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/asvetlov/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/asvetlov/subscriptions",
            "organizations_url": "https://api.github.com/users/asvetlov/orgs",
            "repos_url": "https://api.github.com/users/asvetlov/repos",
            "events_url": "https://api.github.com/users/asvetlov/events{/privacy}",
            "received_events_url": "https://api.github.com/users/asvetlov/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1.0
        },
        {
            "login": "Rarst",
            "id": 737584,
            "node_id": "MDQ6VXNlcjczNzU4NA==",
            "avatar_url": "https://avatars0.githubusercontent.com/u/737584?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/Rarst",
            "html_url": "https://github.com/Rarst",
            "followers_url": "https://api.github.com/users/Rarst/followers",
            "following_url": "https://api.github.com/users/Rarst/following{/other_user}",
            "gists_url": "https://api.github.com/users/Rarst/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/Rarst/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/Rarst/subscriptions",
            "organizations_url": "https://api.github.com/users/Rarst/orgs",
            "repos_url": "https://api.github.com/users/Rarst/repos",
            "events_url": "https://api.github.com/users/Rarst/events{/privacy}",
            "received_events_url": "https://api.github.com/users/Rarst/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1.0
        },
        {
            "login": "olton",
            "id": 365108,
            "node_id": "MDQ6VXNlcjM2NTEwOA==",
            "avatar_url": "https://avatars3.githubusercontent.com/u/365108?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/olton",
            "html_url": "https://github.com/olton",
            "followers_url": "https://api.github.com/users/olton/followers",
            "following_url": "https://api.github.com/users/olton/following{/other_user}",
            "gists_url": "https://api.github.com/users/olton/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/olton/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/olton/subscriptions",
            "organizations_url": "https://api.github.com/users/olton/orgs",
            "repos_url": "https://api.github.com/users/olton/repos",
            "events_url": "https://api.github.com/users/olton/events{/privacy}",
            "received_events_url": "https://api.github.com/users/olton/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1.0
        },
        {
            "login": "sasha240100",
            "id": 7657429,
            "node_id": "MDQ6VXNlcjc2NTc0Mjk=",
            "avatar_url": "https://avatars0.githubusercontent.com/u/7657429?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/sasha240100",
            "html_url": "https://github.com/sasha240100",
            "followers_url": "https://api.github.com/users/sasha240100/followers",
            "following_url": "https://api.github.com/users/sasha240100/following{/other_user}",
            "gists_url": "https://api.github.com/users/sasha240100/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/sasha240100/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/sasha240100/subscriptions",
            "organizations_url": "https://api.github.com/users/sasha240100/orgs",
            "repos_url": "https://api.github.com/users/sasha240100/repos",
            "events_url": "https://api.github.com/users/sasha240100/events{/privacy}",
            "received_events_url": "https://api.github.com/users/sasha240100/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1.0
        },
        {
            "login": "pelya",
            "id": 155328,
            "node_id": "MDQ6VXNlcjE1NTMyOA==",
            "avatar_url": "https://avatars1.githubusercontent.com/u/155328?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/pelya",
            "html_url": "https://github.com/pelya",
            "followers_url": "https://api.github.com/users/pelya/followers",
            "following_url": "https://api.github.com/users/pelya/following{/other_user}",
            "gists_url": "https://api.github.com/users/pelya/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/pelya/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/pelya/subscriptions",
            "organizations_url": "https://api.github.com/users/pelya/orgs",
            "repos_url": "https://api.github.com/users/pelya/repos",
            "events_url": "https://api.github.com/users/pelya/events{/privacy}",
            "received_events_url": "https://api.github.com/users/pelya/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1.0
        },
        {
            "login": "Metnew",
            "id": 10862289,
            "node_id": "MDQ6VXNlcjEwODYyMjg5",
            "avatar_url": "https://avatars1.githubusercontent.com/u/10862289?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/Metnew",
            "html_url": "https://github.com/Metnew",
            "followers_url": "https://api.github.com/users/Metnew/followers",
            "following_url": "https://api.github.com/users/Metnew/following{/other_user}",
            "gists_url": "https://api.github.com/users/Metnew/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/Metnew/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/Metnew/subscriptions",
            "organizations_url": "https://api.github.com/users/Metnew/orgs",
            "repos_url": "https://api.github.com/users/Metnew/repos",
            "events_url": "https://api.github.com/users/Metnew/events{/privacy}",
            "received_events_url": "https://api.github.com/users/Metnew/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1.0
        }
    ];



    return (
    users.map((el,index) => {
        return (
            <div>
                <ul>
                    <li key={index}>
                        <div>Login: {el.login}</div>
                        <div>ID: {el.id}</div>
                            <div>url avatar: {el.avatar_url}</div>
                    </li>
                </ul>
            </div>
        )

    }))

}}
