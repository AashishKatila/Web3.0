import React,{useState,useEffect} from 'react';
import {ethers} from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const {ethereum} = window;

const ethereumContract = () =>{
    const provider = new ethereum.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractABI,signer);

    console.log({
        provider,
        signer,
        transactionContract
    })
}

export const TransactionProvider = ({children}) =>{

    const [connectedAccount,setConnectedAccount] = useState('');


    const checkIfWalletIsConnected = async () => {

        try{
            if(!ethereum) return alert('Please install Metamask')
            const accounts = await ethereum.request({method:'eth_accounts'});
            
            if (accounts.length){
                setConnectedAccount(accounts[0]);
            }
            else{
                console.log('No accounts found');
            }
        }
        catch(error){
        }
        
    }

    const connectWallet = async () =>{
        try{
            if(!ethereum) return alert('Please install Metamask')
        const accounts = await ethereum.request({method:'eth_requestAccounts'});
        }
        catch(error){
            console.log(error);
            throw new error('No ethereum object')
        }
    }

    useEffect(() =>{
        checkIfWalletIsConnected();
    },[])

    return (
        <TransactionContext.Provider value ={{ connectWallet}}>
            {children}
        </TransactionContext.Provider>
    )
}