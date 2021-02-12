import React from "react";

import { Button, Form, FormControl } from "react-bootstrap";

function CharacterFilters({ inputs, onChange, onSubmit, readOnly = false }) {
  return (
    <Form inline onSubmit={onSubmit}>
      <FormControl
        readOnly={readOnly}
        className="mr-sm-2"
        name="code"
        placeholder="code"
        value={inputs.code}
        onChange={onChange}
      />

      <Button type="submit" variant="secondary">
        Search
      </Button>
    </Form>
  );
}

export default CharacterFilters;
