// src/context/WalletContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { useWallet, WalletContextProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletPublicKey, setWalletPublicKey] = useState(null);
  const wallet = useWallet();

  useEffect(() => {
    if (wallet.connected) {
      setWalletPublicKey(wallet.publicKey.toString());
    } else {
      setWalletPublicKey(null);
    }
  }, [wallet]);

  return (
    <WalletContext.Provider value={{ wallet, walletPublicKey }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => useContext(WalletContext);