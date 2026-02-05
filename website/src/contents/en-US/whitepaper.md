---
title: "Quantus Whitepaper"
description: "The official Quantus Network whitepaper detailing our quantum-secure Layer 1 blockchain architecture, post-quantum cryptography, and tokenomics."
pubDate: "2026-02-05"
heroImage: "/blog/covers/whitepaper.jpeg"
heroAlt: "Quantus Network Whitepaper"
featured: true
tags:
  [
    "whitepaper",
    "post-quantum-cryptography",
    "blockchain",
    "quantus-network",
    "dilithium",
    "zero-knowledge-proofs",
  ]
---

**Quantus Network Whitepaper v0.3.2**
Legal Disclaimer: This whitepaper is provided for informational purposes only and does not constitute an offer to sell, a solicitation of an offer to buy, or a recommendation for any security, investment, or financial product. Readers should conduct their own due diligence and consult with qualified professionals before making any investment decisions. Quantus Network makes no representations or warranties regarding the accuracy or completeness of the information herein.

**1. Introduction**

The Quantum Threat

Traditional blockchains face an existential threat from cryptographically relevant quantum computers (CRQCs). The cryptographic foundations of blockchains rely on the hardness of the discrete logarithm problem (DLP), and quantum algorithms, notably Shor's, can solve the DLP exponentially faster than classical computers. This vulnerability could enable quantum-adversaries to derive private keys from public keys, which would allow them to forge transactions and decrypt sensitive financial data.

This outcome is a catastrophic system failure. Without proactive quantum-resistant upgrades, the trillion-dollar crypto economy risks sudden devaluation from such attacks.

Unique Value Proposition

Named after the Latin word for "how much", Quantus Network enables scalable, quantum-secure, private money. Quantus is not a general purpose smart contract platform. Quantus focuses on doing a small number of things better than any other chain. Like a restaurant with a few highly perfected menu items, Quantus delivers:

- Post-Quantum signatures for all transactions
- Post-Quantum signatures and encryption (ML-DSA and ML-KEM) to secure peer connections
- Post-Quantum zero-knowledge-proofs to scale
- High Security Accounts to deter theft and enable recovery from mistakes
- Human-Readable check-phrases for easy address verification

The decision to focus on scalable, quantum-secure, private money stems from the threat CRQCs present to the industry and Bitcoin's inability to address these challenges.

**2. The Quantum Threat to Blockchain**

Quantum Computing Basics

Quantum computers leverage principles like superposition and entanglement to perform computations that are intractable for classical machines. Unlike classical bits, which are either 0 or 1, quantum bits (qubits) can exist in multiple states simultaneously, enabling exponential parallelism for certain problems. This capability poses existential risks to the cryptographic systems underpinning blockchain finance, as algorithms developed for quantum hardware undermine the security assumptions of most public-key cryptography.

Shor's algorithm, introduced in 1994 by Peter Shor, provides a polynomial-time method for factoring large integers and solving the discrete logarithm problem on a quantum computer. In essence, it exploits Quantum Fourier Transforms (QFT) to find the period of a function, allowing efficient reversal of the trapdoor functions that underlie schemes like RSA or elliptic curve cryptography (ECC). For blockchain finance, this means an attacker with a sufficiently powerful quantum computer (estimated at \~2,000 logical qubits [6][7][8][9]) could derive private keys from public keys in polynomial time O(n³). This is an extreme speed-up, rendering vulnerable systems obsolete overnight. [1]

Grover's algorithm, proposed by Lov Grover in 1996, offers a quadratic speedup for unstructured search problems, reducing the time to find a specific item in an unsorted database from O(n) to O(√n) operations. It works by iteratively amplifying the amplitude of the target state through quantum interference. While not as devastating as Shor's for asymmetric cryptography, Grover's impacts symmetric primitives like hash functions and AES encryption, effectively halving the security level (e.g., a 256-bit key behaves like 128 bits against quantum attacks). While impactful, this attack is mitigated by simply doubling the security bits, rather than changing the cryptographic scheme. Additionally, Grover's quadratic speedup is impractical due to its high qubit and gate requirements, requiring billions of operations in sequence, with limited parallelization, making it infeasible for real-world reversals even on future hardware. [2]

The dangers of quantum computing to blockchain finance can be categorized into four areas:

- Forging Digital Signatures: Shor's algorithm directly threatens ECC-based signatures used in most blockchains (e.g., Bitcoin's secp256k1 curve), allowing adversaries to impersonate users and authorize fraudulent transactions. Such a capability would represent a critical failure of the most basic feature of a blockchain.
- Forging False Proofs in Zero-Knowledge Systems: Many zero-knowledge proofs, such as those in zk-SNARKs for privacy-focused finance, rely on discrete logarithm hardness via elliptic-curve pairings for commitments; Shor's could enable the creation of invalid proofs that appear valid, which could allow an attacker to mint new coins or falsify the state of Layer-2s (L2s).
- Decrypting Secret Information: Quantum attacks could expose encrypted data protected by vulnerable public-key schemes in privacy protocols such as Zcash or Monero. It could also decrypt p2p communications in financial protocols, revealing sensitive wealth details and enabling targeted theft.
- Reversing Hash Functions: Grover's algorithm could accelerate preimage attacks on hashes like SHA-256, used for proof-of-work and address generation, but this is the least concerning threat. Many post-quantum cryptographic schemes incorporate hash-based constructions as hashes are considered secure-enough with a large enough digest.

Scaling Challenges in Post-Quantum Cryptography

While post-quantum cryptography (PQC) offers essential protections against quantum threats, it introduces significant scaling hurdles due to the inherent design of these algorithms. Unlike elliptic curve schemes, which rely on compact mathematical structures, PQC primitives require larger parameters to maintain security against both classical and quantum adversaries. This results in substantially bigger public keys, private keys, and signatures, often by orders of magnitude. The following table illustrates typical sizes for ML-DSA at a 128-bit post-quantum security level compared to classical counterparts like 256-bit ECDSA [10]:

| Algorithm | Public Key Size (Bytes) | Private Key Size (Bytes) | Signature Size (Bytes) |
| --- | --- | --- | --- |
| ML-DSA-87 (Dilithium) | 2,592 | 4,896 | 4,627 |
| ECDSA (256-bit) | 32 | 32 | 65 |

As shown, ML-DSA signatures can be over 70 times larger than ECDSA equivalents, and public keys more than 80 times larger. Other PQC families exacerbate this: hash-based schemes like SPHINCS+ may produce signatures up to 41 KB, while even size-optimized lattice variants like FALCON still exceed classical sizes by a significant multiple.

In blockchain contexts, these inflated sizes compound into systemic scaling issues. Larger signatures bloat individual transactions, reducing transactions per second (TPS) as blocks fill faster and require more time for validation. This also strains peer-to-peer (P2P) communication, increasing bandwidth demands and propagation delays, which can heighten the risk of network forks or orphaned blocks in consensus mechanisms like proof-of-work. Storage requirements are also affected, leading to higher node operating costs and barriers for participation, especially for resource-constrained users or validators.

These scaling challenges will have to be addressed by **all blockchains** in the future. Bitcoin, for example, will have much less than 1 TPS if the max block size is not increased.

**3. The Migration Crisis&#32;**

The Coordination Problem

Bitcoin's conservative culture resists protocol changes. Any PQC upgrade would require consensus on contentious issues such as migration timelines, potential coin seizure, and block size increases. Even if the community agreed, every individual user would need to migrate their coins to new quantum-secure addresses. Migration requires action from every crypto holder, many of whom have lost access to their wallets or remain unaware of the threat.

These issues exist for every public blockchain, but are uniquely challenging to Bitcoin due to its lack of clear leadership and philosophy of technical ossification.

The Lost Coin Problem

An estimated $250 billion to $500 billion worth of Bitcoin is permanently inaccessible due to lost keys, deceased holders, or forgotten wallets. [3] These coins cannot be migrated and serve as a public bounty for creating a cryptographically relevant quantum computer (CRQC). Quantum attackers will derive the private keys from exposed unmigrated public keys and likely dump billions of dollars of BTC onto the market.

Technically, the only way to prevent this is a hard deadline that somehow freezes unmigrated coins, but this is politically impossible. The Bitcoin community would have to confiscate funds from users who failed to act, including estates of deceased holders and long-term investors not paying attention. Without such a deadline, the outcome will be that unmigrated coins are stolen and sold, crashing the market and destroying confidence in the network.

The Migration Timeline Problem

Even successful migration faces a scaling wall. Post-quantum signatures are 20x-80x larger than current Bitcoin signatures. Without fundamental architectural changes, Bitcoin's throughput will collapse to a fraction of its already limited capacity.

Assuming Bitcoin solves the political and technical challenges, the migration itself would take months or years. Every holder must submit at least one transaction to move funds to a quantum-secure address. Many will send test transactions first. With bloated PQC signatures choking throughput, the network faces a backlog lasting months or years while quantum-vulnerable coins remain exposed.

These compounding challenges make retrofitting quantum security onto existing chains extraordinarily difficult. Quantus Network sidesteps this by building quantum security into the chain from day one.

**4. Quantus Network Architecture**

Foundation

Quantus Network is built on Substrate, a blockchain SDK developed by Parity Technologies, the team behind Ethereum and Polkadot. Substrate is highly modular, enabling easy replacement of components so we can focus on what makes Quantus unique.

Quantus upgrades Substrate by:

- Adding support for post-quantum signature schemes
- Upgrading the p2p networking security to be post-quantum
- Adding user-controlled transaction reversibility
- Making the database zk-friendly by aligning all data types to field-element boundaries

Post-Quantum Cryptographic Primitives

Quantus Network employs NIST-standardized PQC to ensure the security of transactions and network communications against quantum threats. At the core of transaction integrity is ML-DSA (Module-Lattice-based Digital Signature Algorithm, formerly known as CRYSTALS-Dilithium), a lattice-based signature scheme selected for its balance of security, efficiency, and ease of implementation. ML-DSA leverages the hardness of problems like Learning With Errors (LWE) and Short Integer Solution (SIS) over module lattices, providing robust resistance to both classical and quantum attacks, including those from Shor's algorithm. [4]

For transaction signatures, Quantus integrates ML-DSA-87, the parameter set offering the highest security level (NIST Security Level 5, equivalent to 256-bit classical and 128-bit quantum security) to protect against potential cryptanalytic breakthroughs in lattice problems. This choice prioritizes caution, as lattice cryptography is relatively new and less battle-tested than classical schemes. The larger parameters mitigate risks from potential advances in lattice cryptanalysis, which would still leave smaller key sizes as softer targets.

**Alternatives**

ML-DSA was selected over alternatives like FN-DSA (Falcon) due to

- FN-DSA's greater implementation complexity (e.g., requiring floating-point operations, which are blockchain-unfriendly)
- lack of deterministic key generation in its specification
- its non-finalized status at the time of development

Hash-based options like SLH-DSA were not chosen because of their even larger signature sizes (exceeding 17 KB). Crypto-agility (being able to swap in different signature schemes) is built into Substrate, so it is relatively easy to add these alternatives at a future date, should circumstances demand.

While ML-DSA-87 results in larger keys and signatures, these are manageable in Quantus's early-stage network, where storage is not yet a bottleneck, and optimizations like wormhole addresses via zero-knowledge proofs will address scaling.

For technical details about the implementation see QIP-0006.

**Libp2p**

Quantus Network secures peer-to-peer (P2P) node communications using a combination of ML-DSA for authentication and ML-KEM (Module-Lattice-based Key Encapsulation Mechanism, formerly CRYSTALS-Kyber) for encryption. This integration extends PQC to the libp2p networking stack, modifying core components for quantum resistance: using ML-DSA-87 signatures for peer identity and ML-KEM-768 for transport security (extending the Noise handshake with an additional KEM message for quantum-resistant shared secrets). [5]

The P2P layer is often neglected in quantum-security analysis. Authentication of peers is important, but the worst an attacker could do at the peer level is impersonate a node and send invalid messages, which could result in denial-of-service. This attack is already mitigated by the fact that nodes are generally untrusted in the blockchain model and nodes can easily switch their keys if the attack is detected. Likewise, decrypting P2P communications yields limited attacker benefits (e.g., tracking transaction paths, mitigated by proxies or Tor), and most data becomes public on-chain anyway.

Nevertheless, quantum-securing the P2P layer protects against eavesdropping, man-in-the-middle attacks, and quantum decryption, ensuring that node gossip, block propagation, and other network interactions remain confidential and tamper-proof for the foreseeable future.

For technical details about the implementation see QIP-0004.

Scaling PQC

To address the scaling challenges inherent in post-quantum cryptography, Quantus Network introduces an innovative aggregated post-quantum signature scheme called "Wormhole Addresses". This system leverages zero-knowledge proofs (ZKPs) generated via the Plonky2 proving system (basically STARKs) to move balance verification off-chain, allowing the chain to verify a single compact proof without processing individual signatures. Wormhole Addresses enable the verification of a large number of transactions with one proof, with the public inputs (e.g., nullifiers, storage root, exit addresses, and amounts) becoming the primary limiting factor. This reduces the amortized per-transaction storage demands to approximately 256 additional bytes per transaction, much smaller than any known PQC signature scheme.

The quantum security of the scheme derives from the use of the secure hash function Poseidon2 for commitments via FRI (Fast Reed-Solomon Interactive Oracle Proofs), instead of the quantum-vulnerable elliptic-curve pairings commonly used in SNARKs.

Additionally the authentication secrets are hidden behind Poseidon2. Since secure hash functions are only quadratically weakened by Grover's algorithm, not broken, hash preimage proofs can serve as lightweight post-quantum signatures in ZK contexts, similar to hash-based schemes like SPHINCS+.

**Client / Prover Flow&#32;**

Users generate a provably unspendable address by double-hashing a salt concatenated with a secret

H(H(salt | secret))

This construction prevents false positives (e.g., mistaking a single-hash public key for an unspendable address) because in Substrate (and generally) blockchain addresses are the single hash of a public key, which is derived from the private key via some algebraic operation, not via a secure hash. The security of the construction therefore reduces to finding the preimage-of-a-preimage of a secure hash. Tokens sent to this address are effectively burned. They cannot be spent because no private key exists for the address that received them. These coins can therefore be re-minted without inflating supply.

For each transfer, a TransferProof storage object is created, containing details like a unique global transfer count. The user's wallet generates a Merkle-Patricia-Trie (MPT) storage proof from a recent block header's storage root to the leaf for this TransferProof. A nullifier is computed

H(H(salt | secret | global\_transfer\_count))

to prevent double-spends, with the secret derived deterministically from the wallet seed for retention.

**Aggregator Flow:&#32;**

Any party (client, miner, or third-party) can aggregate multiple proofs using Plonky2's recursion, forming a tree of proofs where each parent proof is a verification of the child proofs, with the child proofs' public inputs aggregated:

- nullifiers pass unchanged
- exit addresses are deduplicated
- block hashes are proven to be linked and then all but the most recent is dropped
- amounts for duplicate exit addresses are summed

This recursion supports hierarchical aggregation, drastically reducing on-chain data.

**Chain / Verifier Flow:&#32;**

The network verifies the aggregated proof by checking:

- block hash is on chain and recent
- nullifier uniqueness (to prevent double-spends)
- proof validity

The ZK circuit enforces:

- storage proof correctness
- nullifier computation accuracy
- address unspendability
- balance match between inputs and outputs
- block header linkage

Plonky2 was selected for the following reasons

- already audited
- post-quantum
- no trusted setup
- efficient proving/verification
- seamless proof aggregation
- Rust-native implementation
- compatible with Substrate's no-std environment

Performance highlights include recursive proofs in 170 milliseconds and compact sizes (100 KB per aggregated proof), enabling massive throughput gains. In an optimal case with 5 MB blocks and all transactions going to the same output, Wormhole Addresses could pack \~153,000 transactions into a single block (4.9 MB / 32 bytes per nullifier), a 223x improvement over \~685 raw ML-DSA transactions (5 MB / 7.3 KB each).

**Security Notes:&#32;**

Potential risks include inflation bugs from faulty circuit/verification implementations, although this would be economically detectable if re-minted coins exceed balances of zero-send addresses. Users can optionally prove an address is a wormhole by publishing the first hash without revealing the secret. Verification transactions are unsigned, so denial-of-service via failed transactions needs to be mitigated non-financially. Token supply calculations are maintained, as re-mints appear as new coins but maintain maximum supply guarantees via burns.

For more technical details about the implementation see QIP-0005.

Consensus Mechanism

Quantus Network uses a Proof-of-Work (PoW) consensus algorithm that preserves the desirable properties of Bitcoin's consensus algorithm while improving compatibility with ZK-proof systems by switching out SHA-256 with Poseidon2.

Importantly, this change is not being made for quantum security. Cryptographic hash functions like SHA-256 are weakened but not destroyed by quantum algorithms, notably Grover's. Some post-quantum signature schemes use secure hashes as a building block for this reason.

Poseidon2 is a refinement of the Poseidon hash function. Creating SNARKs or STARKs for computations involving traditional hash functions like SHA-256 often requires nearly 100x the number of gates compared to using Poseidon, which relies entirely on algebraic functions over field elements, instead of bit-level operations.

We use the Goldilocks field for both Poseidon2 and Plonky2. The Goldilocks field's order fits in a unsigned 64 bit integer, which increases efficiency without compromising soundness.  

**5. Wealth Preservation**

There are many risks in managing cryptocurrency keys. Most of them are avoidable.

Reversible Transactions

Quantus Network offers user-configurable reversible transactions. Senders set a time window during which they can cancel outgoing transfers. This deters theft and corrects errors without sacrificing finality. The system uses a modified Substrate "scheduler pallet" with timestamps. Wallets display countdowns for both sender (with a cancel button) and recipient.

Reversible transactions enable novel security protocols while maintaining decentralization through onchain enforcement.

For more technical details see QIP-0009.

Check-Phrases

Quantus Network introduces "check-phrases," a cryptographically-secure human-readable checksum for blockchain addresses. The address is hashed to generate a short sequence of memorable words from the BIP-39 mnemonic list. Check-phrases protect against typos, tampering, and address poisoning attacks. A 50,000 iteration key derivation function makes rainbow table attacks expensive. For large transactions, users should still verify every character of the address.

For more technical detail please see QIP-0008.

High-Security Accounts

Any account can be upgraded to a "high-security account" with mandatory reversal periods on all outgoing transfers. A designated "guardian" (hardware wallet, multisig, or trusted third party) can cancel suspicious transactions during the reversal period, sending funds to the guardian instead of the sender or receiver. This opt-in feature is permanent once activated, preventing thieves from disabling it.

Guardians can be chained: a high-security account's guardian can itself be a high-security account with its own guardian. This creates composable hierarchies where each guardian has superior permissions to the account it protects. The design gives users time to detect and respond to unauthorized activity without compromising finality for legitimate transfers.

For more technical details see QIP-0011.

Key Recovery

Many crypto-fortunes have gone to the grave with their owners. Quantus Network offers a simple way to specify a recovery address that can pull your funds at any time, subject to a fixed delay. During this time, the owner can deny recovery if they have access to the key. This feature enables survivorship: users have an onchain will without the need for courts or estates.

HD-Lattice

Hierarchical Deterministic (HD) wallets are the industry standard for blockchains, allowing users to back up one seed phrase for all keys, improving security and convenience over manual backups per action. Adapting this to lattice schemes like Dilithium involves two challenges:

- HMAC-SHA512 outputs can't directly form lattice private keys, which are polynomials sampled from a ring with certain properties.
- Non-hardened key derivation relies on elliptic curve addition, absent in lattices (public keys aren't closed under any algebraic operation).

Quantus Network addresses the first issue by using the output of the HMAC as entropy to deterministically construct the private key, not as the private key itself. The second issue is less critical and remains an open research question whether lattice cryptography can be adapted to address it.

For more technical details see QIP-0002.

**6. Tokenomics and Governance**

Quantus Network exists in a changing environment, and we cannot assume that we will get everything right on the first try. For this reason, we choose a simple starting point and allow the governance system to make changes as new information is acquired. This design makes the blockchain a living entity that can adapt to its environment at will. In particular, the Substrate governance process allows deep changes to the chain with minimal coordination among the various node-runners.

Block Rewards

Quantus Network employs a straightforward tokenomics model imitating that of Bitcoin. There is a maximum supply of 21,000,000 coins and a simple heuristic determines the reward each block.

```javascript
block_reward = (max_supply - current_supply) / constant
```

This heuristic forms a smooth exponentially decaying curve as the block\_reward contributes to the current\_supply which reduces the block\_reward computed at the next block. Any burns from fees or otherwise reduce current\_supply and essentially become part of the budget for block rewards. The constant is chosen so that, in the absence of any burns, 99% of the coins will be emitted in about 40 years.



Investor Allocations

Quantus Network was built with the help of angel investors who took great risk in funding it. To avoid the supply overhangs that investor-lockups create, all investors, public and private, will be fully liquid on day one. This allocation will be the only "pre-mine". All other tokens will have to be mined into existence. Depending on the success of public sales this portion will represent 20-30% of the total supply.

Company Allocations

To compensate the team for taking the risk to build new technology with no promise of success, a portion of the block reward is sent to the company for approximately four years. This gives a de facto vesting schedule of about 10% of the total supply to the company.

After that point, the company's portion of block rewards will be redirected to a treasury governed by token holders, essentially forming a DAO.



Transaction Fees

Standard transactions have a fee that goes to miners, providing an incentive to include transactions. Reversed transactions from high-security accounts are charged a volume-based fee of 1% that is burned, essentially adding it to the security budget. Transactions that go thru the zk aggregation system are also subject to a volume-based fee of 0.1%, which is split evenly between the miner and a burn.

Forkless Upgrades

Quantus Network supports "forkless" upgrades through Substrate's runtime upgrades, allowing the blockchain's core logic (the "runtime") to evolve without hard forks that could disrupt the network or split the community. This is achieved via on-chain governance referenda, where approved proposals trigger a runtime swap, essentially replacing the existing WASM code blob with a new one in a single block, ensuring continuity of state and operations. This upgrade path minimizes downtime and risks, empowering the community to iteratively refine the protocol as real world usage reveals potential improvements.

As the community gains confidence in the system over time, the power to change the runtime will be significantly reduced to limit the attack surface, should a malicious actor obtain control of the upgrade process.

Governance System

Quantus Network inherits its governance framework from Polkadot's OpenGov system via Substrate. Token holders participate via conviction voting, where they agree to lock their assets for varying periods to amplify their vote's weight. This amplification can range from 1x (no lock) to 6x (maximum lockup). This design encourages long-term alignment by tying influence to commitment.

Proposals are categorized into multiple voting tracks called "origins". Each origin has tailored parameters like approval thresholds (e.g., supermajority for high-impact changes), minimum deposits to deter spam, preparation/enactment periods, and decision timelines to prevent gridlock. This multi-track design allows parallel processing of diverse referenda, from routine treasury spends to critical runtime upgrades.

The Technical Collective is a curated group of technical experts serving as a specialized body to propose, review, or whitelist urgent technical matters, expediting them through a dedicated track while maintaining community oversight.

Quantus adopts this system without modifications but starts with a minimalistic setup to avoid complexity in its early stages. Initially, only the Technical Collective track is active, which will be used for binding, high-privilege decisions like protocol upgrades or parameter tweaks.

Later, Quantus can add a non-binding community vote track for gauging sentiment on non-enforceable topics, such as feature suggestions or ecosystem polls. This system will become binding when the company turns the network over to the DAO.

This phased approach allows the network to evolve organically via future governance votes without burdening users with unnecessary complexity at the beginning.

**7. Roadmap**

The current roadmap through 2026, subject to change:

- Heisenberg Inception - December 2024 - Funding Secured, Substrate Chosen
- Resonance Alpha - July 2025 - Public Testnet, Dilithium Signatures, Reversible Transactions
- Schrödinger Beta - October 2025 - Feature Complete, Ready for Audit
- Dirac Beta - November 2025 - PoW changed to Poseidon2, Audits Addressed
- Planck Beta - January 2026 - High Security Accounts, Multisigs, Hardware Wallet, ZK Integration
- Bell Mainnet - Q2 2026 - Mainnet Launch
- Fermi Upgrade - Q4 2026 - ZK Proof Aggregation Infrastructure

**8. Risks**

Building Quantus Network comes with inherent risks.

- Implementation Issues: Flaws in software logic can cause serious failures in even the best designed systems.
- NIST Algorithm Selection Issues: Potential flaws or backdoors in selected post-quantum standards (e.g., ML-DSA, ML-KEM) that could emerge post-standardization. In the worst case, such flaws would allow an attacker to forge signatures by deriving a private key from the public, representing a catastrophic failure mode of the chain. If such flaws were made public, Quantus Network could be upgraded to a new algorithm, but if such flaws are exploited sparingly they may never be discovered.
- Quantum Computing Timelines: Quantum breakthroughs might arrive much later than anticipated, delaying the need for PQC; conversely, secretive development (e.g. by governments) could lead to sudden threats if the blockchain community fails to update swiftly.
- Other Considerations: General adoption barriers, regulatory uncertainties in finance/blockchain, and the inherent volatility of crypto ecosystems.

**9. References & Further Reading**

1. Shor, P. W. (1997). Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer. *SIAM Journal on Computing*, 26(5), 1484–1509. [https://doi.org/10.1137/S0097539795293172](https://doi.org/10.1137/S0097539795293172)
2. Grover, L. K. (1996). A fast quantum mechanical algorithm for database search. *Proceedings of the Twenty-Eighth Annual ACM Symposium on Theory of Computing*, 212–219. [https://doi.org/10.1145/237814.237866](https://doi.org/10.1145/237814.237866)
3. Chainalysis. (2024). The Chainalysis 2024 Crypto Crime Report. [https://www.chainalysis.com/blog/2024-crypto-crime-report-introduction/](https://www.chainalysis.com/blog/2024-crypto-crime-report-introduction/)
4. National Institute of Standards and Technology. (2024). FIPS 204: Module-Lattice-Based Digital Signature Standard (ML-DSA). U.S. Department of Commerce. [https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)
5. National Institute of Standards and Technology. (2024). FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard (ML-KEM). U.S. Department of Commerce. [https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf)
6. Häner, T., Jaques, S., Naehrig, M., Roetteler, M., & Soeken, M. (2020). Improved quantum circuits for elliptic curve discrete logarithms. *arXiv preprint arXiv:2002.12480*. [https://arxiv.org/abs/2002.12480](https://arxiv.org/abs/2002.12480)
7. Gidney, C., & Ekerå, M. (2021). How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits. *arXiv preprint arXiv:1905.09749*. [https://arxiv.org/abs/1905.09749](https://arxiv.org/abs/1905.09749)
8. Aggarwal, D., et al. (2021). Assessment of Quantum Threat To Bitcoin and Derived Cryptocurrencies. *ePrint IACR*. [https://eprint.iacr.org/2021/967.pdf](https://eprint.iacr.org/2021/967.pdf)
9. Roetteler, M., Naehrig, M., Svore, K. M., & Lauter, K. (2017). Quantum resource estimates for computing elliptic curve discrete logarithms. *arXiv preprint arXiv:1706.06752*. [https://arxiv.org/abs/1706.06752](https://arxiv.org/abs/1706.06752)
10. Open Quantum Safe Project. (n.d.). ML-DSA | Open Quantum Safe. Retrieved January 29, 2026, from https://openquantumsafe.org/liboqs/algorithms/sig/ml-dsa.html
