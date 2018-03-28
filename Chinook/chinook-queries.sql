
-- Provide a query showing Customers (just their full names, customer ID and country) who are not in the US.
SELECT (FirstName || " " || LastName) as "Full Name", CustomerId, Country From Customer WHERE Country <> "USA";

-- Provide a query only showing the Customers from Brazil.
SELECT * FROM Customer WHERE Country = "Brazil";

-- Provide a query showing the Invoices of customers who are from Brazil  The resultant table should show the customer's full name, Invoice ID, Date of the invoice and billing country.
SELECT (C.FirstName || " " || C.LastName) as "Full Name", I.InvoiceId,  I.InvoiceDate, I.BillingCountry 
From Customer as C 
JOIN Invoice as I
    ON C.CustomerId = I.CustomerId
WHERE C.Country = "Brazil";

-- Provide a query showing only the Employees who are Sales Agents.
SELECT * FROM Employee AS E LEFT JOIN Customer AS C ON C.SupportRepId = E.EmployeeId;

-- Provide a query showing a unique list of billing countries from the Invoice table.
SELECT Distinct(BillingCountry) FROM Invoice;

-- Provide a query that shows the invoices associated with each sales agent. The resultant table should include the Sales Agent's full name.
SELECT Distinct((E.FirstName || " " || E.LastName)) AS FullName, GROUP_CONCAT(I.InvoiceId, ", ") AS Invoices
FROM Employee AS E 
LEFT JOIN Customer AS C
    ON E.EmployeeId = C.SupportRepId
LEFT JOIN Invoice AS I
    ON I.CustomerId = C.CustomerId
WHERE I.InvoiceId IS NOT NULL
GROUP BY FullName;

-- Provide a query that shows the Invoice Total, Customer name, Country and Sale Agent name for all invoices and customers.
SELECT 
    (C.FirstName || " " || C.LastName) AS CustomerName, 
    (E.FirstName || " " || E.LastName) AS SaleAgentt,
    I.BillingCountry AS Country,
    I.Total AS InvoiceTotal
FROM Customer AS C
LEFT JOIN Employee AS E
    ON E.EmployeeId = C.SupportRepId
LEFT JOIN Invoice AS I
    ON I.CustomerId = C.CustomerId;

-- How many Invoices were there in 2009 and 2011? What are   the respective total sales for each of those years?
SELECT strftime('%Y',InvoiceDate) AS Year, 
    Count(InvoiceDate) AS Count, 
    SUM(Total) AS Sum
FROM Invoice
WHERE InvoiceDate LIKE "%2009%" 
    OR InvoiceDate LIKE "%2011%"
GROUP BY (strftime('%Y',InvoiceDate));


-- Looking at the InvoiceLine table, provide a query that COUNTs the number of line items for Invoice ID 37.
SELECT COUNT(*)
FROM InvoiceLine
WHERE InvoiceId = 37;

-- Looking at the InvoiceLine table, provide a query that COUNTs the number of line items for each Invoice HINT: [GROUP BY](http://www.sqlite.org/lang_select.html#resultset)


-- Provide a query that includes the track name with each invoice line item.
-- Provide a query that includes the purchased track name AND artist name with each invoice line item.
-- Provide a query that shows the # of invoices per countrHINT: [GROUP BY](http://www.sqlite.org/lang_select.html#resultset)
-- Provide a query that shows the total number of tracks in each playlisThe Playlist name should be included on the resultant table.
-- Provide a query that shows all the Tracks, but displays no IDThe resultant table should include the Album name, Media type and Genre.
-- Provide a query that shows all Invoices but includes the # of invoice line items.
-- Provide a query that shows total sales made by each sales agent.
-- Which sales agent made the most in sales in 2009?
-- Which sales agent made the most in sales in 2010?
-- Which sales agent made the most in sales over all?
-- Provide a query that shows the # of customers assigned to each sales agent.
-- Provide a query that shows the total sales per countrWhich country's customers spent the most?
-- Provide a query that shows the most purchased track of 2013.
SELECT TrackName, MAX(Quantity)
FROM 
    (SELECT Track.Name AS TrackName,
    SUM(InvoiceLine.UnitPrice * InvoiceLine.Quantity) AS Quantity
    FROM Track
    JOIN InvoiceLine ON InvoiceLine.TrackId = Track.TrackId
    GROUP BY TrackName)
    
-- Provide a query that shows the top 5 most purchased tracks over all.
-- Provide a query that shows the top 3 best selling artists.
-- Provide a query that shows the most purchased Media Type.
-- Provide a query that shows the number tracks purchased in all invoices that contain more than one genre.
