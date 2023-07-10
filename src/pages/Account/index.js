import { useEffect, useState } from "react";
import { _getAccounts } from "src/services/account.services";
import AccountBox from "./components/AccountBox";
import Grid from "src/components/layout/Grid";

const Account = () => {
  const [data, setData] = useState([]);

  const handleFetch = async () => {
    const response = await _getAccounts();
    if (response.ok) setData(response.data);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <Grid
      data={data}
      renderItem={(account) => <AccountBox {...account} />}
    ></Grid>
  );
};

export default Account;
