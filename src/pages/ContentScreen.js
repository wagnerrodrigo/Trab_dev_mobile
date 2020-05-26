import React from 'react';
import { ActivityIndicator, ScrollView} from 'react-native';
import Firebase from '../database/Firebase';
import {View, Text} from 'react-native';


export class ContentScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contents: [],
            isLoading: true

        }
    }

    componentDidMount(){
        Firebase.firestore().collection('contents').onSnapshot((query)=>this.contentUpdate);
    }
        //qualquer nome do metodo
    contentUpdate(query){
        const contents = [];
        query.forEach((doc) =>{
            const { name , desc , img} = doc.data();
            contents.push({
                id: doc.id,
                name,
                desc,
                img
            })
        });
        this.setState({
            contents,
            isLoading:false,
        })

    }

    renderActivityIndicator(){
        if(this.setState.isLoading){
            return(
                <View>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
    }

    render(){

        { this.renderActivityIndicator()}

        return(
            <View><Text>OI</Text></View>
        )
    }
}