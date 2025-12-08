import React from 'react';

export default function Pricing(){
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Pricing</h1>
      <p className="mb-4">Weekly tuition:</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 border rounded">
          <h3 className="font-semibold">Standard Daycare</h3>
          <p className="text-lg font-bold">$250 / week per child</p>
        </div>
        <div className="p-4 border rounded">
          <h3 className="font-semibold">Sibling Discount</h3>
          <p className="text-sm">Available — please contact us for details.</p>
        </div>
      </div>
      <p className="mt-4 text-sm">Payments are due at the beginning of each week. Late fee of $20 applies to overdue accounts.</p>
    </section>
  );
}
