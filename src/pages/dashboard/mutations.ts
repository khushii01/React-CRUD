import { gql } from '@apollo/client';

export const DELETE_LEAD = gql`
    mutation deleteLead($id: ID!) {
        deleteLead(id: $id) {
            id
            attributes {
                Name
                email
                Status
                Source
                updatedAt
            }
        }
    }
`;

export const CREATE_LEAD = gql`
    mutation createLead($data: {$name: String!, $email: String!, $status: String!, $source: String!}) {
        createLead($data: {$name: String!, $email: String!, $status: String!, $source: String!}) {
            id
            attributes {
                Name
                email
                Status
                Source
                updatedAt
            }
        }
    }
`;

export const UPDATE_LEAD = gql`
    mutation updateLead($id: ID!, $data: {$name: String!, $email: String!, $status: String!, $source: String!}) {
        updateLead(id: $id, $data: {$name: String!, $email: String!, $status: String!, $source: String!}) {
            id
            attributes {
                Name
                email
                Status
                Source
                updatedAt
            }
        }
    }
`;