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
    if (value > 0.0) this.balance -= value;
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
    this.withdrawing(Number(this.state.withdrawing));
    if (Number(this.state.withdrawing) > 0)
      this.setState((prevState) => ({
        ...prevState,
        withdrawing: 0,
        wasWithdrawing: true,
      }));
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
          {this.state.wasDepositing && <Message>Amount deposited</Message>}
          <Button label="Deposit" onClick={this.onDeposit} />
        </ResultContainer>

        <Input
          name="withdrawing"
          type="number"
          label="Value to withdrawing ($)"
          onChange={this.onChange}
          value={this.state.withdrawing}
        />
        <ResultContainer hasMessage={!!this.state.wasWithdrawing}>
          {this.state.wasWithdrawing && (
            <Message>Amount to withdrawing</Message>
          )}
          <Button label="Withdrawing" onClick={this.onWithdrawing} />
        </ResultContainer>
        <ResultContainer hasMessage={!!this.state.showBalance}>
          {this.state.showBalance && (
            <Message>{`${this.getBalance()} ($)`}</Message>
          )}
          <Button
            label={this.state.showBalance ? "Hide balance" : "Show balance"}
            onClick={() =>
              this.setState((prevState) => ({
                ...prevState,
                showBalance: !prevState.showBalance,
              }))
            }
          />
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
        {super.render()}
        <ResultContainer hasMessage>
          <ResultContainer hasMessage>
            <Message type="message">Type of Account:</Message>
            {this.state.showType && <Message>{this.type}</Message>}
          </ResultContainer>
          <Button
            label={
              this.state.showType ? "Hide account type" : "Show account type"
            }
            onClick={this.onCheckType}
          />
        </ResultContainer>
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
        {super.render()}
        <ResultContainer hasMessage>
          <ResultContainer hasMessage>
            <Message type="message">Type of Account:</Message>
            {this.state.showType && <Message>{this.type}</Message>}
          </ResultContainer>
          <Button
            label={
              this.state.showType ? "Hide account type" : "Show account type"
            }
            onClick={this.onCheckType}
          />
        </ResultContainer>
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
