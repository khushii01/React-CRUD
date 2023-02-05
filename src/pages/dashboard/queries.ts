import { gql } from '@apollo/client';

export const GET_DASHBOARD = gql`
    query fetchDashboard {
      leads(pagination:{pageSize:100}){
        data{
          id
          attributes{
            Name
            email
            Status
            Source
            updatedAt
          }
        }
      }
    }
`;