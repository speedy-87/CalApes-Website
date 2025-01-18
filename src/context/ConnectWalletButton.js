// src/components/ConnectWalletButton.js
import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

const ConnectWalletButton = () => {
  const { connect, disconnect, connected } = useWallet();

  return (
    <button onClick={() => (connected ? disconnect() : connect())}>
      {connected ? 'Disconnect Wallet' : 'Connect Wallet'}
    </button>
  );
};

export default ConnectWalletButton;