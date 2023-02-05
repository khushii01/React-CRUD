import React, { useContext, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { DELETE_LEAD, CREATE_LEAD, UPDATE_LEAD } from './mutations';
import { GET_DASHBOARD } from './queries';
import { useQuery, useMutation } from '@apollo/client';
import { flattenObj } from '../../components/utils/responseFlatten';
import { graphql } from '@apollo/client/react/hoc';
import { AddBaseModalWrapper, EditBaseModalWrapper } from './ModalPopup/BaseModalWrapper';
import "./dashboard.css";

export default function MainLobby() {
    const [leads, setLeads] = useState([]);
    function FetchData() {
        useQuery(GET_DASHBOARD, {
            onCompleted: (res) => {
                let leadList = flattenObj(res.leads.data)
                    .map(a => {
                        a.id = Number(a.id);
                        return a;
                    })
                    .sort((a, b) => (b.id - a.id));
                setLeads(leadList);
            }
        });
    }
    FetchData();
    // const DeleteLead = (id: number) => {
    //     useMutation(DELETE_LEAD, {
    //         variables: { id: id },
    //         onCompleted: (res) => {
    //             console.log(res);
    //         }
    //     });
    // }
    // const handleDelete = event => {
    //     setDeleteId(event.target.value);
    //     console.log(deleteId);
    //     event.preventDefault();
    //     addDeleteId({ variables: { id: deleteId } });
    //     setDeleteId(0);
    // }

    function renderData() {
        return leads.map((item: any) => {
            return <tr>
                <td>{String(item.id)}</td>
                <td>{String(item.Name)}</td>
                <td>{String(item.email)}</td>
                <td>{String(item.Source)}</td>
                <td>{String(item.updatedAt)}</td>
                <td>{String(item.Status)}</td>
                <td><button className="delete-icon">
                    <i className="fas fa-trash-alt"></i>
                </button></td>
            </tr>
        })
    }

    //Modal view for adding a lead
    const [isModal, setModal] = useState(false);
    const [isEditModal, setEditModal] = useState(false);
    const content = (
        <Container>
            <form>
                <Row>
                    <Col>
                        <label>Source</label>
                        <select>
                            <option value="Website">Website</option>
                            <option value="Google">Google</option>
                            <option value="LinkedIn">LinkedIn</option>
                        </select>

                    </Col>
                    <Col>
                        <label>Status</label>
                        <select>
                            <option value="New">New</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Closed">Closed</option>
                        </select>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label>Name</label>
                        <input type="text" className='input-group' />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label>Email</label>
                        <input type="text" className='input-group' />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button className='lead-button'>Submit</button>
                    </Col>
                </Row>
            </form>
        </Container>
    );

    const toggleModal = () => {
        setModal(isModal => !isModal);
    };
    const toggleEditModal = () => {
        setEditModal(isEditModal => !isEditModal);
    };

    return (
        <>
            <article>
                <header>
                    <h1 className='lead-title'>Leads Dashboard</h1>
                </header>
            </article>
            <div>
                <button onClick={toggleModal} className="lead-button">Add Lead </button>
                <AddBaseModalWrapper content={content} isModal={isModal} onBackdropClick={toggleModal} />
            </div>
            <div>
                <button onClick={toggleEditModal} className="lead-button">Edit Lead</button>
                <EditBaseModalWrapper content={content} isEditModal={isEditModal} onBackdropClick={toggleEditModal} />
            </div>
            <div id="modal-root"></div>
            <section className='dashboard-content'>
                <table>
                    <tr>
                        <th>Lead ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Source</th>
                        <th>Last Updated</th>
                        <th>Status</th>
                    </tr>
                    {renderData()}
                </table>
            </section>
        </>
    )
}