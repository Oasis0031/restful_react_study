import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MemberList from '../member/MemberList';
import MemberInfo from '../member/MemberInfo';
import MemberJoin from '../member/MemberJoin';
import MemberLogin from '../member/MemberLogin';
import MemberUpdate from '../member/MemberUpdate';

const router = createBrowserRouter ([
  {
    path: "/members/member-list",
    element: <MemberList />
  },
  { 
    path: "/members/member-info/:id",
    element: <MemberInfo />
  },
  { 
    path: "/members/member-join",
    element: <MemberJoin />
  },
  { 
    path: "/members/member-login",
    element: <MemberLogin />
  },
  { 
    path: "/members/member-update",
    element: <MemberUpdate />
  }
  
])

export default router;