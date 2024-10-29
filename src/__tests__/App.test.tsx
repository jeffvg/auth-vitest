import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { expect, describe, test } from 'vitest';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import { App } from '../App';

describe('Okta login', () => {
    test('should render Sign In With Okta button', async () => {        
        render(
            <ThemeProvider theme={createTheme(BLUIThemes.blue)}>
                <App />
            </ThemeProvider>
        );
        const element = await waitFor(() => screen.getByRole('button', { name: /Sign In With Okta/i }));
        expect(element).toBeInTheDocument();
    });
    test('should render Debug button', async () => {
        render(
            <ThemeProvider theme={createTheme(BLUIThemes.blue)}>
                <App />
            </ThemeProvider>
        );
        const element = await waitFor(() => screen.getByRole('button', { name: /Debug/i }));
        expect(element).toBeInTheDocument();
    });
    test('should render forgot password label', async () => {
        render(
            <ThemeProvider theme={createTheme(BLUIThemes.blue)}>
                <App />
            </ThemeProvider>
        );
        const element = await waitFor(() =>screen.getByText(/Forgot your password/i));
        expect(element).toBeInTheDocument();
    });
    test('should render create account label', async () => {
        render(
            <ThemeProvider theme={createTheme(BLUIThemes.blue)}>
                <App />
            </ThemeProvider>
        );
        const element = await waitFor(() =>screen.getByText(/Create Account/i));
        expect(element).toBeInTheDocument();
    });
    test('should render contact support label', async () => {
        render(
            <ThemeProvider theme={createTheme(BLUIThemes.blue)}>
                <App />
            </ThemeProvider>
        );
        const element = await waitFor(() =>screen.getByText(/Contact an Eaton Support Representative/i));
        expect(element).toBeInTheDocument();
    });
});