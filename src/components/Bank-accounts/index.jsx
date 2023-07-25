import React from "react";
import Button from "../Form/Button";
import Input from "../Form/Input";
import { Container, Message, ResultContainer } from "./styles";

export class BankAccount extends React.Component {
  constructor(props) {
    super(props);
    this.balance = props.balance;
    this.getBalance = this.getBalance.bind(this);
    this.depositing = this.depositing.bind(this);
    this.withdrawing = this.withdrawing.bind(this);
    this.onDeposit = this.onDeposit.bind(this);
    this.onWithdrawing = this.onWithdrawing.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  getBalance() {
    return parseFloat(this.balance);
  }

  depositing(value) {
    if (value > 0.0) this.balance += value;
  }

  withdrawing(value) {
    if (value > 0.0 && value <= this.balance) this.balance -= value;
  }

  state = {
    wasDepositing: false,
    depositing: 0,
    wasWithdrawing: false,
    withdrawing: 0,
    showBalance: false,
  };

  onDeposit() {
    this.depositing(Number(this.state.depositing));
    if (Number(this.state.depositing) > 0)
      this.setState((prevState) => ({
        ...prevState,
        depositing: 0,
        wasDepositing: true,
      }));
  }

  onWithdrawing() {
    if (Number(this.state.withdrawing > this.balance))
      this.setState((prevState) => ({
        ...prevState,
        withdrawing: 0,
        wasWithdrawing: true,
        error: "You don't have this amount",
      }));
    else if (Number(this.state.withdrawing) > 0) {
      this.withdrawing(Number(this.state.withdrawing));
      this.setState((prevState) => ({
        ...prevState,
        withdrawing: 0,
        wasWithdrawing: true,
        error: null,
      }));
    }
  }

  onChange({ target: { name, value } }) {
    this.setState((prevState) => ({ ...prevState, [name]: value }));
  }

  render() {
    return (
      <>
        <Input
          name="depositing"
          type="number"
          label="Value to depositing ($)"
          onChange={this.onChange}
          value={this.state.depositing}
        />
        <ResultContainer hasMessage={!!this.state.wasDepositing}>
          <Button label="Deposit" onClick={this.onDeposit} />
          {this.state.wasDepositing && <Message>Amount deposited</Message>}
        </ResultContainer>

        <Input
          name="withdrawing"
          type="number"
          label="Value to withdrawing ($)"
          onChange={this.onChange}
          value={this.state.withdrawing}
        />
        <ResultContainer hasMessage={!!this.state.wasWithdrawing}>
          <Button label="Withdrawing" onClick={this.onWithdrawing} />
          {this.state.wasWithdrawing && !this.state.error && (
            <Message>Amount withdraw</Message>
          )}
          {this.state.error && <Message>{this.state.error}</Message>}
        </ResultContainer>
        <ResultContainer hasMessage={!!this.state.showBalance}>
          <Button
            label={this.state.showBalance ? "Hide balance" : "Show balance"}
            onClick={() =>
              this.setState((prevState) => ({
                ...prevState,
                showBalance: !prevState.showBalance,
              }))
            }
          />

          {this.state.showBalance && (
            <Message>{`${this.getBalance()} ($)`}</Message>
          )}
        </ResultContainer>
      </>
    );
  }
}

export class SavingAccount extends BankAccount {
  constructor(props) {
    super(props);
    this.type = "Saving Account";
    this.onCheckType = this.onCheckType.bind(this);
  }

  state = { showType: false };

  onCheckType() {
    this.setState((prevState) => ({
      ...prevState,
      showType: !prevState.showType,
    }));
  }

  render() {
    return (
      <>
        <ResultContainer hasMessage>
          <Button
            label={
              this.state.showType ? "Hide account type" : "Show account type"
            }
            onClick={this.onCheckType}
          />
          {this.state.showType && <Message> {this.type}</Message>}
        </ResultContainer>
        {super.render()}
      </>
    );
  }
}

export class CheckingAccount extends BankAccount {
  constructor(props) {
    super(props);
    this.type = "Checking Account";
    this.onCheckType = this.onCheckType.bind(this);
  }

  state = { showType: false };

  onCheckType() {
    this.setState((prevState) => ({
      ...prevState,
      showType: !prevState.showType,
    }));
  }

  render() {
    return (
      <>
        <ResultContainer hasMessage>
          <Button
            label={
              this.state.showType ? "Hide account type" : "Show account type"
            }
            onClick={this.onCheckType}
          />
          {this.state.showType && <Message> {this.type}</Message>}
        </ResultContainer>
        {super.render()}
      </>
    );
  }
}

const BankAccounts = () => {
  return (
    <>
      <Container>
        <SavingAccount balance={10} />
      </Container>
      <Container>
        <CheckingAccount balance={1600} />
      </Container>
    </>
  );
};

export default BankAccounts;
