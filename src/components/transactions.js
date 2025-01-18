import React, { useEffect, useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import "./Transactions.css";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      // Configure connection to support versioned transactions
      const connection = new Connection("https://muddy-necessary-sheet.solana-mainnet.quiknode.pro/2ad73309e083f6598405fc541b1b0c5e94b5e513", {
        commitment: "confirmed",
        maxSupportedTransactionVersion: 0, // Explicitly set the max supported version
      });
      const marketingWallet = "69D58rmcfRaUAPNKjGnhCRhmm62ZAqLNTt3NGPvWQ6Z9"; // Replace with your wallet address

      try {
        // Fetch the latest transaction signatures
        const signatures = await connection.getSignaturesForAddress(
          new PublicKey(marketingWallet),
          { limit: 10 } // Fetch the latest 10 transactions
        );

        // Fetch detailed transaction data for each signature
        const transactionsDetails = await Promise.all(
          signatures.map(async (signatureInfo) => {
            const transaction = await connection.getParsedTransaction(signatureInfo.signature, {
              maxSupportedTransactionVersion: 0, // Ensure it supports versioned transactions
            });
            return transaction;
          })
        );

        setTransactions(transactionsDetails.filter((tx) => tx !== null)); // Filter out null transactions
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchTransactions();
  }, []);

  // Function to extract SOL transferred from the transaction
  const getAmountTransferred = (transaction) => {
    const instructions = transaction.transaction.message.instructions;
    let amount = 0;

    // Check each instruction for a transfer of SOL
    instructions.forEach((instruction) => {
      if (instruction.parsed && instruction.parsed.type === "transfer") {
        amount += instruction.parsed.info.lamports;
      }
    });

    // Convert lamports to SOL (1 SOL = 1 billion lamports)
    return amount / Math.pow(10, 9); // Return SOL value
  };

  return (
    <div id="calMarketing">
      <div className="calapesMarketing">
        <h2>$CALAPES Marketing Transactions</h2>
        {error ? (
          <p className="error">Failed to load transactions: {error}</p>
        ) : (
          <ul className="transaction-list">
            {transactions.length === 0 ? (
              <p>Loading transactions...</p>
            ) : (
              transactions.map((tx, index) => (
                <li key={index} className="transaction-item">
                  <p>
                    <strong>Signature:</strong>{" "}
                    <a
                      href={`https://solscan.io/tx/${tx.transaction.signatures[0]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tx.transaction.signatures[0]}
                    </a>
                  </p>
                  <p><strong>Block Time:</strong> {new Date(tx.blockTime * 1000).toLocaleString()}</p>
                  <p><strong>From:</strong> {tx.transaction.message.accountKeys[0].pubkey.toBase58()}</p>
                  <p><strong>To:</strong> {tx.transaction.message.accountKeys[1].pubkey.toBase58()}</p>
                  <p><strong>Amount:</strong> {getAmountTransferred(tx)} SOL</p>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Transactions;