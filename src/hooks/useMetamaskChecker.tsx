declare let window: any;
export default async function CheckMetamask() {
  if (window.ethereum) {
    try {
      // check if the chain to connect to is installed
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x4ad" }], // chainId must be in hexadecimal numbers
      });
    } catch (error: any) {
      // This error code indicates that the chain has not been added to MetaMask
      // if it is not, then install it into the user MetaMask
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x4ad",
                rpcUrl: "https://dataseed.iorachain.com",
                chainName: "Iora Chain",
                nativeCurrency: {
                  name: "IORA",
                  symbol: "IORA",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://explorer.iorachain.com"],
                iconUrls:
                  "https://storageapi.fleek.co/d5db343a-0f9f-4dd4-bca1-b432ec3147fd-bucket/iorachain.png",
              },
            ],
          });
        } catch (addError) {
          console.error(addError);
        }
      }
      console.error(error);
    }
  } else {
    // if no window.ethereum then MetaMask is not installed
    console.log(
      "MetaMask is not installed. Please consider installing it: https://metamask.io/download.html"
    );
  }
}
