IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

CREATE TABLE [Schools] (
    [ID] bigint NOT NULL IDENTITY,
    [Name] nvarchar(max) NULL,
    [Address] nvarchar(max) NULL,
    [Zipcode] nvarchar(max) NULL,
    CONSTRAINT [PK_Schools] PRIMARY KEY ([ID])
);

GO

CREATE TABLE [Classes] (
    [ID] bigint NOT NULL IDENTITY,
    [ClassName] nvarchar(max) NULL,
    [Course] nvarchar(max) NULL,
    [Capacity] int NOT NULL,
    [SchoolID] bigint NULL,
    CONSTRAINT [PK_Classes] PRIMARY KEY ([ID]),
    CONSTRAINT [FK_Classes_Schools_SchoolID] FOREIGN KEY ([SchoolID]) REFERENCES [Schools] ([ID]) ON DELETE NO ACTION
);

GO

CREATE INDEX [IX_Classes_SchoolID] ON [Classes] ([SchoolID]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20200329014253_SchoolDB', N'3.1.3');

GO

